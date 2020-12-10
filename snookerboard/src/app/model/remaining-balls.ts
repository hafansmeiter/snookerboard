import { EndgameBalls } from './endgame-balls';

export class RemainingBalls {
    
    redBalls: number = 15;
    endgameBalls: EndgameBalls = new EndgameBalls();
    
    removeRedBall() {
        this.redBalls--;
    }

    reset() {
        this.redBalls = 15;
        this.endgameBalls.reset();
    }
}
