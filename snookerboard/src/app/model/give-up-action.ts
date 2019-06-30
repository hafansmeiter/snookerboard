import { Action } from './action';

export class GiveUpAction extends Action {

    public apply(): void {
        
    }    
    
    public undo(): void {
        throw new Error("Undo not allowed.");
    }

}
