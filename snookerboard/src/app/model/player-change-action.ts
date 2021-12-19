import { Action } from "./action";
import { Frame } from "./frame";
import { Player } from "./player";

export class PlayerChangeAction extends Action {
    constructor(private player: Player)  {
        super();
    }
    public apply(frame: Frame, player: Player): void {
        frame.doPlayerChange(player);
    }
    public getDescription(): string {
        return "Spielerwechsel";
    }
}
