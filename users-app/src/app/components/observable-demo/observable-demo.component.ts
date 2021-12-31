import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, from } from 'rxjs';
import { filter, first, map, skip, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  obs$ = new Observable((observer)=>{
    setTimeout(()=> observer.next("First Package"), 1000)
    setTimeout(()=> observer.next("Second Package"), 3000)
    setTimeout(()=> observer.error(new Error("Something bad happened")), 5000)
    setTimeout(()=> observer.next("Fourth Package"), 8000)
    setTimeout(()=> observer.complete(), 10000)
  })

  fromObs$ = from([1,2,3,4,5])
  unSubfromObs$ : Subscription;

  unSub$ : Subscription;
  packages : Array<string> = []

  onSubscribe(){
    this.unSubfromObs$ = this.fromObs$.pipe(
      tap(val => console.log("[TAP]", val)),
      filter(val => val >= 3),
      take(3)
    ).subscribe(console.log)



    this.unSub$ = this.obs$.pipe(
      map(val => "My " + val),
      // take(2),
      tap(val => console.log(val))
    ).subscribe({
      next : (pkg : string) => this.packages.push(pkg),
      error : (err) => console.log(err),
      complete : () => console.log("[COMPLETED]")
    })
  }

  onUnsubcribe(){
    this.unSub$.unsubscribe();
    this.unSubfromObs$.unsubscribe();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
