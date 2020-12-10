import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Action } from '../model/action';
import { ScoreRedBallAction } from '../model/score-red-ball-action';
import { ScoreYellowBallAction } from '../model/score-yellow-ball-action';
import { ScoreGreenBallAction } from '../model/score-green-ball-action';
import { ScoreBrownBallAction } from '../model/score-brown-ball-action';
import { ScoreBlueBallAction } from '../model/score-blue-ball-action';
import { ScorePinkBallAction } from '../model/score-pink-ball-action';
import { ScoreBlackBallAction } from '../model/score-black-ball-action';
import { ScoreAction } from '../model/score-action';
import { Frame } from '../model/frame';

@Component({
  selector: 'ball-selection-box',
  templateUrl: './ball-selection-box.component.html',
  styleUrls: ['./ball-selection-box.component.css']
})
export class BallSelectionBoxComponent implements OnInit {

  @Input() frame: Frame;
  
  @Output()
  ballPocketed: EventEmitter<ScoreAction> = new EventEmitter<ScoreAction>()
  
  constructor() { }

  ngOnInit() {
  }

  redBallSelected(): void {
    this.emitBallSelected(new ScoreRedBallAction());
  }

  yellowBallSelected(): void {
    this.emitBallSelected(new ScoreYellowBallAction());
  }

  greenBallSelected(): void {
    this.emitBallSelected(new ScoreGreenBallAction());
  }

  brownBallSelected(): void {
    this.emitBallSelected(new ScoreBrownBallAction());
  }

  blueBallSelected(): void {
    this.emitBallSelected(new ScoreBlueBallAction());
  }

  pinkBallSelected(): void {
    this.emitBallSelected(new ScorePinkBallAction());
  }

  blackBallSelected(): void {
    this.emitBallSelected(new ScoreBlackBallAction());
  }

  emitBallSelected(action: ScoreAction): void {
    this.ballPocketed.emit(action);
  }

}
