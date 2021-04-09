import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showTable=false;
  constructor() { }

  ngOnInit(): void {
  }
  
  showTab(){
    console.log("test");
    if(!this.showTable){
       this.showTable=true;
    }
    else{
      this.showTable=false;
    }
  }
}
