import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaults',
  templateUrl: './defaults.component.html',
  styleUrls: ['./defaults.component.css']
})
export class DefaultsComponent implements OnInit {
  showTable=false;
  constructor() { }

  ngOnInit(): void {
  }
  // TABLE STATES //
  public category1 = false;
  public category2 = false;
  public category3 = false;
  toggle(id){
    switch(id){
       case 'cat1': this.category1 = !this.category1; break;
       case 'cat2': this.category2 = !this.category2; break;
       case 'cat3': this.category3 = !this.category3; break;
    }
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
