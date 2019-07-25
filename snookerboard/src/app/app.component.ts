import { Component, OnInit } from '@angular/core';
import { ScoreAction } from './model/score-action';
import { FoulAction } from './model/foul-action';
import { Game } from './model/game';
import { Frame } from './model/frame';
import { Player } from './model/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Snookerboard';
  
  game: Game;
  currentFrame: Frame;
  
  constructor() {

  }

  ngOnInit(): void {
    this.game = new Game(new Player("Daniel"), new Player("Luki"), 7);
    this.currentFrame = this.game.currentFrame;
  }

  ballPocketed(action: ScoreAction): void {
    this.currentFrame.addAction(action);
  }

  foulCommitted(action: FoulAction): void {
    this.currentFrame.addAction(action);
  }

  undoTriggered(): void {
    this.currentFrame.removeLastAction();
  }

  changePlayerTriggered(): void {
    this.game.changePlayer();
  }

  giveUpTriggered(): void {
    this.currentFrame = this.game.newFrame();
  }

}
