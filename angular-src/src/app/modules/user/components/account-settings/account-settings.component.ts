import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  showTab:number = 1;
  constructor() { }

  ngOnInit() {
  }
  switchTab(index){
    this.showTab = index;
  }
}
