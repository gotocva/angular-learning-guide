import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learning-guide';
  
  public alertType: string = 'success';

  public setAlertType(alertType:string) {
    this.alertType = alertType;
  }
}
