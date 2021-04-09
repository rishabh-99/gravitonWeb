import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-stats',
  templateUrl: './bank-stats.component.html',
  styleUrls: ['./bank-stats.component.css']
})
export class BankStatsComponent implements OnInit {
 isDisabled=true;
  constructor() { }

  ngOnInit(): void {
  }

 toggleInput(){
  if(this.isDisabled){
    this.isDisabled=false;
    console.log("test")
  }
  else{
    this.isDisabled=true;
  }
}
}
