import { Player } from './player';
import { Game } from './game';
import { ActionCommand } from './action-command';
import { Action } from './action';
import { RemainingBalls } from './remaining-balls';

export class Frame {
    scorePlayer1: number = 0;
    scorePlayer2: number = 0;

    ahead: number = 0;
    remaining: number = 147;
    remainingBalls: RemainingBalls = new RemainingBalls();

    commands: ActionCommand[] = []

    constructor(private game: Game) {
    }

    addAction(action: Action): void {
        this.commands.push(new ActionCommand(this, this.game.currentPlayer, action));
        this.updateScore();
    }

    removeLastAction(): void {
        this.commands.pop();
        this.updateScore();
    }

    updateScore(): void {
        this.resetScore();
        this.commands.forEach(c => c.execute());
    }

    resetScore(): void {
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;
    }

    score(player: Player, score: number): void {
        if (player == this.game.player1) {
            this.scorePlayer1 += score;
            if (this.scorePlayer1 < 0) {
                this.scorePlayer1 = 0;
            }
        } else {
            this.scorePlayer2 += score;
            if (this.scorePlayer2 < 0) {
                this.scorePlayer2 = 0;
            }
        }
    }

    removeRedBall(): void {
        this.remainingBalls.redBalls--;
    }

    leader(): number {
        if (this.scorePlayer1 == this.scorePlayer2) {
            return -1;
        }
        return this.scorePlayer1 > this.scorePlayer2 ? 0 : 1;
    }
}
