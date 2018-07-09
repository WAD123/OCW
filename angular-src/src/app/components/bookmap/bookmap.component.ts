import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bookmap',
  inputs: ['seats'],
  templateUrl: './bookmap.component.html',
  styleUrls: ['./bookmap.component.css']
})
export class BookmapComponent implements OnInit {
  seats:Number;
  seatsRL:Number;
  seatsLR:Number;
  seat:any= {
    width: 50,
    height: 0
  }
  desk:any={
    width: 0,
    height: 0
  };
  seatsArr:Boolean[]=[];
  constructor() { }

  ngOnInit() {
    this.generateMap(this.seats);
  }
  getDeskWidth(){
    return this.seat.width*Number(this.seatsLR)+5;
  }
  getDeskHeight(){
    return 80;
  }
  generateMap(seats){
    console.log(this.seats);
    this.seatsRL=Number(this.seats)/2;
    this.seatsLR=this.seatsRL;
    this.seat.height=this.seat.width*0.717;
    this.seatsArr=((seats) => {
      let tmpArr:Boolean[]=[];
      for(let i=0;i<seats;i++){
        tmpArr.push(false);
      }
      return tmpArr;
    })(this.seats);
  }
}
