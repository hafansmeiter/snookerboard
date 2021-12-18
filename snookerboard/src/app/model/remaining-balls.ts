import { EndgameBalls } from './endgame-balls';

export class RemainingBalls {
    
    redBalls: number;
    endgameBalls: EndgameBalls = new EndgameBalls();

    constructor(private startRedBalls: number) {
        this.redBalls = startRedBalls;
    }
    
    removeRedBall() {
        this.redBalls--;
    }

    reset() {
        this.redBalls = this.startRedBalls;
        this.endgameBalls.reset();
    }
}
