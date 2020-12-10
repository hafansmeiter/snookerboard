import { Player } from './player';
import { Frame } from './frame';

export abstract class Action {
    public abstract apply(frame: Frame, player: Player): void;
    public abstract getDescription(): string;
}
