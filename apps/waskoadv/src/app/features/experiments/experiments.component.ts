import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wasko-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  whichOpen = 0
  whichOpen2 = 0

  constructor() { }

  ngOnInit(): void {
  }

}
