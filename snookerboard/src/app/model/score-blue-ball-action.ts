import { ScoreColoredBallAction } from './score-colored-ball-action';

export class ScoreBlueBallAction extends ScoreColoredBallAction {
    protected score: number = 5;

    public getDescription(): string {
        return "Blauer Ball gelocht";
    }
}
