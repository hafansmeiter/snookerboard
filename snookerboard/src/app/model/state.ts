import { RemainingBalls } from './remaining-balls';

export class State {
    remainingBalls: RemainingBalls = new RemainingBalls();
    isEndGame: boolean = false;
    isColorBall: boolean = false;
    isFinalColorBall: boolean = false;
    highestEndgameScore: number = 0;
    isRedBallAvailable(): boolean { return this.remainingBalls.redBalls > 0; }
    isYellowBallAvailable(): boolean { return this.isColorBallPossible(2); }
    isGreenBallAvailable(): boolean { return this.isColorBallPossible(3); }
    isBrownBallAvailable(): boolean { return this.isColorBallPossible(4); }
    isBlueBallAvailable(): boolean { return this.isColorBallPossible(5); }
    isPinkBallAvailable(): boolean { return this.isColorBallPossible(6); }
    isBlackBallAvailable(): boolean { return this.isColorBallPossible(7); }
    isColorBallPossible(score: number): boolean { return this.isEndGameColorBallPossible(score) || this.isColorBall; }
    isEndGameColorBallPossible(score: number): boolean { return this.isEndGame && Math.max(2, this.highestEndgameScore + 1) == score; }
    
    pocketRedBall() {
        this.remainingBalls.removeRedBall();
        if (this.remainingBalls.redBalls == 0) {
            this.isFinalColorBall = true;
        }
        this.isColorBall = true;
    }
    
    pocketColorBall(score: number) {
        if (this.isEndGame) {
            this.highestEndgameScore = score;
        } else {
            this.isColorBall = false;
        }
        if (this.isFinalColorBall) {
            this.isEndGame = true;
        }
    }
    
    resetMove() {
        this.isColorBall = false;
        if (this.remainingBalls.redBalls == 0) {
            this.isEndGame = true;
        }
    }

    reset(): void {
        this.isEndGame = false;
        this.isColorBall = false;
        this.isFinalColorBall = false;
        this.highestEndgameScore = 0;
        this.remainingBalls.reset();
    }
}
