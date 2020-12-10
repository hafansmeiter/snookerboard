import { Action } from './action';
import { Player } from './player';
import { Frame } from './frame';

export class ActionCommand {

    constructor(private frame: Frame, public player: Player, public action: Action) {
    }

    public execute() {
        this.action.apply(this.frame, this.player);
    }
}
