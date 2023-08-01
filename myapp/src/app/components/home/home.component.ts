import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  products:string[]=[
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  constructor(){
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
