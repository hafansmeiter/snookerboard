import { Action } from './action';
import { Player } from './player';
import { Frame } from './frame';

export abstract class ScoreAction extends Action {

    protected abstract score: number;

    public apply(frame: Frame, player: Player): void {
        frame.score(player, this.score);
        frame.pocketColoredBall(this.score);
    }
}
