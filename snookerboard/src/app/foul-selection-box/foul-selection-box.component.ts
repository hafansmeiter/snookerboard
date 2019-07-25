import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FoulAction } from '../model/foul-action';

@Component({
  selector: 'foul-selection-box',
  templateUrl: './foul-selection-box.component.html',
  styleUrls: ['./foul-selection-box.component.css']
})
export class FoulSelectionBoxComponent implements OnInit {

  @Output()
  foulCommitted: EventEmitter<FoulAction> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  foulSelected(score: number) {
    this.foulCommitted.emit(new FoulAction(score));
  }

}
