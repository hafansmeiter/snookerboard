import { ScoreColoredBallAction } from './score-colored-ball-action';

export class ScoreBrownBallAction extends ScoreColoredBallAction {
    protected score: number = 4;

    public getDescription(): string {
        return "Brauner Ball gelocht";
    }
}
