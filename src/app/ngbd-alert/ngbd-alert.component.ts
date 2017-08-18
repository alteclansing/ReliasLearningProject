import { Component, Input } from '@angular/core';
/*
 This class uses the ngbd library, which is a library built for angular that allows developers to use bootstrap in
 angular applications without writing all the css, html, etc...
 The purpose of this class is to simply display the error message whenever a user's search returns nothing.
 */
@Component({
  selector: 'app-ngbd-alert-closable',
  templateUrl: './ngbd-alert.component.html',
  styleUrls: ['./ngbd-alert.component.css']
})
export class NgbdAlertClosableComponent{

  @Input()
  public alerts: Array<IAlert> = [];

  constructor() {
    this.alerts.push({
    id: 0,
    type: 'danger',
    message: 'Oops! There doesn\'t seem to be any matches :/' });


  }
  // the alert is closoable so the user can be notified then they can close it whenever they want
  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1)
  }



}
// the interface that is used to display the ngbd-alert
export interface IAlert {
  id: number;
  type: string;
  message: string;
}
