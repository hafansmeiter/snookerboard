import { Action } from './action';
import { Player } from './player';
import { Frame } from './frame';

export class ActionCommand {

    constructor(private frame: Frame, private player: Player, private action: Action) {
    }

    public execute() {
        this.action.apply(this.frame, this.player);
    }
}
