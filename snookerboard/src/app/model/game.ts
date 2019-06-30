import { Player } from './player';
import { Frame } from './frame';

export class Game {
    framesPlayer1: number;
    framesPlayer2: number;
    frames: Frame [];
    currentFrame: Frame;

    constructor(public player1: Player, public player2: Player, public bestOf: number) {
        this.newFrame();
    }

    public newFrame(): Frame {
        if (this.currentFrame) {
            this.frames.push(this.currentFrame);
        }
        this.currentFrame = new Frame(this);
        return this.currentFrame;
    }
}
