import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Game } from '../model/game';
import { StateService } from '../service/state.service';
import { Player } from '../model/player';

@Component({
  selector: 'new-game-box',
  templateUrl: './new-game-box.component.html',
  styleUrls: ['./new-game-box.component.css']
})
export class NewGameBoxComponent implements OnInit {

  namePlayer1: string = '';
  namePlayer2: string = '';
  bestOf: number = 3;
  redBalls: number = 10

  @Output()
  newGameStarted = new EventEmitter<Game>();

  constructor(private ss: StateService) { }

  ngOnInit() {
  }

  startGameClicked(event: any): void {
    let player1 = new Player(this.namePlayer1, true);
    let player2 = new Player(this.namePlayer2, false);
    this.newGameStarted.emit(new Game(player1, player2, this.bestOf, this.redBalls));
  }

}
