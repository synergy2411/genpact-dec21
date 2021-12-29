import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {

  tab = 0;

  todoCollection = [
    {label : "grocery", status : "pending"},
    {label : "shopping", status : "completed"},
    {label : "insurance", status : "pending"},
    {label : "planting", status : "completed"},
  ]

  label : string = "Renew Car insurance";

  username : string = "Foo Bar";

  styles = {
    'text-decoration' : 'underline'
  }

  classes = {
    'my-border' : true,
    'my-font' : false
  }

  onToggle(){
    this.classes['my-border'] = !this.classes['my-border']
    this.classes['my-font'] = !this.classes['my-font']
  }
  constructor() { }

  ngOnInit(): void {
  }

}
