import { Player } from './player';
import { Frame } from './frame';

export class Game {
    framesPlayer1: number = 0;
    framesPlayer2: number = 0;
    frames: Frame [] = [];
    currentFrame: Frame;
    currentPlayer: Player;

    constructor(public player1: Player, public player2: Player, public bestOf: number) {
        this.currentPlayer = player1;
        this.newFrame();
    }

    public newFrame(): Frame {
        this.finishFrame();
        this.currentFrame = new Frame(this);
        return this.currentFrame;
    }

    private finishFrame(): void {
        if (this.currentFrame) {
            this.frames.push(this.currentFrame);
            
            let winner = this.currentFrame.leader();
            if (winner == 0) {
                this.framesPlayer1++;
            } else if (winner == 1) {
                this.framesPlayer2++;
            }
        }
    }

    public changePlayer(): void {
        this.currentPlayer = this.currentPlayer == this.player1 ? this.player2 : this.player1;
    }
}
