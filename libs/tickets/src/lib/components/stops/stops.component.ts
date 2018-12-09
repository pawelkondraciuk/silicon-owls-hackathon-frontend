import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'owls-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.scss']
})
export class StopsComponent implements OnInit {

  @Input() stops: string[];

  constructor() { }

  ngOnInit() {
  }

}
