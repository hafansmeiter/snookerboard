import { Action } from './action';
import { Player } from './player';
import { Frame } from './frame';

export class GiveUpAction extends Action {

    public getDescription(): string {
        return "Gibt auf";
    }

    public apply(frame: Frame, player: Player): void {
        
    }    
    
}
