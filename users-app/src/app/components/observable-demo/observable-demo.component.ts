import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  obs$ = new Observable((observer)=>{
    setTimeout(()=> observer.next("First Package"), 1000)
    setTimeout(()=> observer.next("Second Package"), 3000)
    setTimeout(()=> observer.next("Third Package"), 5000)
    setTimeout(()=> observer.next("Fourth Package"), 8000)
    setTimeout(()=> observer.complete(), 10000)
  })

  unSub$ : Subscription;
  packages : Array<string> = []

  onSubscribe(){
    this.unSub$ = this.obs$.subscribe({
      next : (pkg : string) => this.packages.push(pkg),
      error : () => {},
      complete : () => console.log("[COMPLETED]")
    })
  }

  onUnsubcribe(){
    this.unSub$.unsubscribe();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
