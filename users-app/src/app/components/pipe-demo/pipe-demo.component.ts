import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  stringToReverse = "Hello Angular";

  promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Here the data comes...")
    }, 3000)
  })

  contactNumber = 987654321;

  constructor() { }

  ngOnInit(): void {
  }

}
