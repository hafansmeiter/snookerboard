import { Action } from './action';
import { Player } from './player';
import { Frame } from './frame';

export abstract class ScoreAction extends Action {

    protected abstract score: number;

    public apply(): void {
        this.frame.score(this.player, this.score);
    }

    public undo(): void {
        this.frame.score(this.player, -this.score);
    }    
}
