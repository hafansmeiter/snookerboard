import { ScoreColoredBallAction } from './score-colored-ball-action';

export class ScoreYellowBallAction extends ScoreColoredBallAction {
    protected score: number = 2;

    public getDescription(): string {
        return "Gelber Ball gelocht";
    }
}
