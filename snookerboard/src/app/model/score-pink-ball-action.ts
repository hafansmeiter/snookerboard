import { ScoreColoredBallAction } from './score-colored-ball-action';

export class ScorePinkBallAction extends ScoreColoredBallAction {
    protected score: number = 6;

    public getDescription(): string {
        return "Pinker Ball gelocht";
    }
}
