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

  showNewGameDialog: boolean = false;
  
  game: Game;
  currentFrame: Frame;
  
  constructor() {
  }

  ngOnInit(): void {
    // this.showNewGameDialog = true;
    this.newGame(new Game(new Player("Dani", true), new Player("Luki", false), 7));
  }

  startNewGame(): void {
    this.showNewGameDialog = true;
  }

  newGame(game: Game): void {
    this.showNewGameDialog = false;
    
    this.game = game;
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
    this.currentFrame.resetMove();
  }

  giveUpTriggered(): void {
    this.currentFrame = this.game.newFrame();
  }

}
