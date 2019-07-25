import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Frame } from '../model/frame';

@Component({
  selector: 'overview-box',
  templateUrl: './overview-box.component.html',
  styleUrls: ['./overview-box.component.css']
})
export class OverviewBoxComponent implements OnInit {

  @Input() frame: Frame;

  @Output()
  undo = new EventEmitter<void>();
  @Output()
  giveUp = new EventEmitter<void>();
  @Output()
  changePlayer = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  undoTriggered(): void {
    this.undo.emit();
  }

  giveUpTriggered(): void {
    this.giveUp.emit();
  }

  changePlayerTriggered(): void {
    this.changePlayer.emit();
  }

}
