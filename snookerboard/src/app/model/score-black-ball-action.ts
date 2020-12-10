import { ScoreColoredBallAction } from './score-colored-ball-action';

export class ScoreBlackBallAction extends ScoreColoredBallAction {
    protected score: number = 7;

    public getDescription(): string {
        return "Schwarzer Ball gelocht";
    }
}
