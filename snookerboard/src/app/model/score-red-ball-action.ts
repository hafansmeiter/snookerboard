import { ScoreAction } from './score-action';
import { Frame } from './frame';
import { Player } from './player';

export class ScoreRedBallAction extends ScoreAction {
    protected score: number = 1;

    public apply(frame: Frame, player: Player): void {
        frame.score(player, this.score);
        frame.removeRedBall();
    }
}
