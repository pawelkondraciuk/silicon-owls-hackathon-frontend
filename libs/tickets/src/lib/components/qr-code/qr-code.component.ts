import { Component, Inject, Input, SecurityContext } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export interface DialogData {
  qrCode: string;
}

@Component({
  selector: 'owls-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent {
  get safeQrCode() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.data.qrCode}`)
  }

  constructor(
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
}
