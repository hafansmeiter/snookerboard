import { Player } from './player';
import { Game } from './game';
import { Action } from './action';

export class Frame {
    scorePlayer1: number;
    scorePlayer2: number;
    currentPlayer: Player;
    actions: Action [];

    constructor(private game: Game) {
    }

    score(player: Player, score: number): void {
        if (player == this.game.player1) {
            this.scorePlayer1 += score;
        } else {
            this.scorePlayer2 += score;
        }
    }
}
