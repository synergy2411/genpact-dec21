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
      const random = Math.round(Math.random() * 1000);
      console.log("RANDOM : ", random);
      if(random >= 60){
        resolve("Here the data comes...")
      }else{
        reject(new Error("Less then 60"))
      }
    }, 3000)
  })

  contactNumber = 987654321;

  constructor() { }

  ngOnInit(): void {
  }

}
