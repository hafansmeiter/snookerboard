import { ActionCommand } from './action-command';
import { Action } from './action';
import { Frame } from './frame';
import { Player } from './player';

export class History {
    actions: ActionCommand[] = []

    addAction(frame: Frame, player: Player, action: Action): void {
        this.actions.push(new ActionCommand(frame, player, action));
    }

    removeLastAction(): void {
        this.actions.pop();
    }

    execute(): void {
        this.actions.forEach(c => c.execute());
    }
}
