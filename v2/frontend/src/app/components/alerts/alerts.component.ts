import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['../../css/app.component.scss']
})
export class AlertsComponent implements OnInit {

  @Input() message: string = ""
  @Input() type: string = ""

  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  onClose(){
    this.modal.hide()
  }
}
