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

  formData: FormData;
  // files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  dragOverDocument: boolean;
  options: UploaderOptions;
  @Output() newFile = new EventEmitter<UploadFile>();

  constructor(private ticketsFacade: TicketsFacade) {
    this.options = { concurrency: 1, maxUploads: 3 };
    // this.files = [];
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
  public onDragLeave(e: Event) {
    if (!e) {
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
    } else if (output.type === 'removed') {
      // this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    } else if (output.type === 'rejected' && typeof output.file !== 'undefined') {

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
