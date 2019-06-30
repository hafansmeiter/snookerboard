import { Player } from './player';
import { Frame } from './frame';

export abstract class Action {

    constructor(protected player: Player, protected frame: Frame) {
    }

    public abstract apply(): void;
    public abstract undo(): void;
}
