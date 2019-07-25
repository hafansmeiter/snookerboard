import { Player } from './player';
import { Frame } from './frame';
import { Action } from './action';

export class FoulAction extends Action {
    
    constructor(public score: number) {
        super();
    }

    public apply(frame: Frame, player: Player): void {
        frame.score(player, -this.score);
    }
}
