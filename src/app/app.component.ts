import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  // templateUrl: './app.component.html',
  template: `
    <app-customers></app-customers>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title: string;
  constructor() {}

  // Initialize component with data
  //Call a service that gets us data
  ngOnInit() {
    this.title = "Core concepts app";
  }
}
