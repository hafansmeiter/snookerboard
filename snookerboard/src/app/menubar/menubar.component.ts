import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  @Output()
  startNewGame: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

  newGameTriggered(): void {
    this.startNewGame.emit();
  }

}
