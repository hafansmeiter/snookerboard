import { ScoreColoredBallAction } from './score-colored-ball-action';

export class ScoreGreenBallAction extends ScoreColoredBallAction {
    protected score: number = 3;

    public getDescription(): string {
        return "Grüner Ball gelocht";
    }
}
