import { Player } from './player';
import { Game } from './game';
import { Action } from './action';
import { History } from './history';
import { State } from './state';

export class Frame {
    scorePlayer1: number = 0;
    scorePlayer2: number = 0;
    state: State = new State();
    history: History = new History();

    get ahead() {
        return Math.abs(this.scorePlayer1 - this.scorePlayer2);
    }

    get remaining() {
        let score = 0;
        if (this.state.isEndGame) {
            let i = Math.max(2, this.state.highestEndgameScore + 1);
            while (i <= 7) {
                score += i;
                i++;
            }
        } else {
            score += this.state.remainingBalls.redBalls * 8 + 27;
            if (this.state.isColorBall) {
                score += 7;
            }
        }
        return score;
    }
    
    constructor(private game: Game) {
    }
    
    addAction(action: Action): void {
        this.history.addAction(this, this.game.currentPlayer, action);
        this.updateScore();
    }
    
    removeLastAction(): void {
        this.history.removeLastAction();
        this.updateScore();
    }
    
    resetMove() {
      this.state.resetMove();
    }
    
    private updateScore(): void {
        this.reset();
        this.history.execute();
    }
    
    private reset(): void {
        this.state.reset();
        this.resetScore();
    }

    private resetScore(): void {
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;
    }

    score(player: Player, score: number): void {
        if (player == this.game.player1) {
            this.scorePlayer1 += score;
        } else {
            this.scorePlayer2 += score;
        }
    }

    scoreOpposite(player: Player, score: number): void {
        this.score(player == this.game.player1 ? 
            this.game.player2 : this.game.player1, score);
    }

    pocketRedBall(): void {
        this.state.pocketRedBall();
    }

    pocketColoredBall(score: number) {
        this.state.pocketColorBall(score);
    }

    leader(): number {
        if (this.scorePlayer1 == this.scorePlayer2) {
            return -1;
        }
        return this.scorePlayer1 > this.scorePlayer2 ? 0 : 1;
    }
}
