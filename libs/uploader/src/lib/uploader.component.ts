import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FILE_STATE } from '@owls/tickets';
import { humanizeBytes, UploaderOptions, UploadFile, UploadInput, UploadOutput } from 'ngx-uploader';
import { TicketsFacade } from '../../../tickets/src/lib/+state/tickets.facade';

let nextUniqueId = 0;

@Component({
  selector: 'owls-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {

  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOverDocument: boolean;
  options: UploaderOptions;

  constructor(private ticketsFacade: TicketsFacade) {
    this.options = { concurrency: 1 };
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  @HostListener('document:dragover', ['$event'])
  public onDragOver(e: Event) {
    if (!e) {
      return;
    }

    this.dragOverDocument = true;
  }

  @HostListener('document:dragleave', ['$event'])
  public onDragLeave(e: MouseEvent) {
    if (!e || e.clientX || e.clientY) {
      return;
    }

    this.dragOverDocument = false;
  }

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'allAddedToQueue') {
      const event: UploadInput = {
        type: 'uploadAll',
        url: 'http://mrogowski.nazwa.pl:8080/api/ticket/',
        method: 'POST',
        fieldName: 'ticket',
        id: `${nextUniqueId--}`
      };

      this.uploadInput.emit(event);
    } else if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') {

    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      this.ticketsFacade.addEntity({
        file: {
          id: +output.file.id,
          name: output.file.name,
          state: FILE_STATE.INPROGRESS
        }
      })
    } else if (output.type === 'done' && output.file.responseStatus !== 200) {
      this.ticketsFacade.fileUploadError({
        file: {
          id: +output.file.id,
          name: output.file.name,
          state: FILE_STATE.ERROR
        }
      })
    } else if (output.type === 'done') {
      this.ticketsFacade.fileUploadDone({
        file: {
          id: +output.file.id,
          name: output.file.name,
          state: FILE_STATE.DONE
        },
        ticket: output.file.response
      })
    }
  }
}
