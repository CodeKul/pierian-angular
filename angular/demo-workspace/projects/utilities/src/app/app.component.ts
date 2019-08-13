import { CustDialogComponent } from './cust-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'utilities';

  constructor(
    private modalService: NgbModal
  ) {

  }

  open() {
    const modalRef = this.modalService.open(CustDialogComponent);
    modalRef.componentInstance.myNm = 'Android';
  }
}
