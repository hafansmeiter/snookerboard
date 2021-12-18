import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { BallSelectionBoxComponent } from './ball-selection-box/ball-selection-box.component';
import { FoulSelectionBoxComponent } from './foul-selection-box/foul-selection-box.component';
import { OverviewBoxComponent } from './overview-box/overview-box.component';
import { NewGameBoxComponent } from './new-game-box/new-game-box.component'
import { MenubarComponent } from './menubar/menubar.component';
import { HistoryBoxComponent } from './history-box/history-box.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SpinnerModule } from 'primeng/spinner';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
//import { TimelineModule } from 'primeng/timeline';
import { SliderModule } from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    ScoreBoardComponent,
    BallSelectionBoxComponent,
    FoulSelectionBoxComponent,
    OverviewBoxComponent,
    NewGameBoxComponent,
    MenubarComponent,
    HistoryBoxComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    SpinnerModule,
    MenubarModule,
    DialogModule,
    ToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    SliderModule,
    //TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
