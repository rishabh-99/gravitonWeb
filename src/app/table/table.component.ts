import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // TABLE STATES //
     public category1 = false;
     public category2 = false;
     public category3 = false;
     
     // TOGGLES INDIVIDUAL TABLE STATE //
   toggle(id){
    switch(id){
       case 'cat1': this.category1 = !this.category1; break;
       case 'cat2': this.category2 = !this.category2; break;
       case 'cat3': this.category3 = !this.category3; break;
    }
 }
}
