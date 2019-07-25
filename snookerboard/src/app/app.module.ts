import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { BallSelectionBoxComponent } from './ball-selection-box/ball-selection-box.component';
import { FoulSelectionBoxComponent } from './foul-selection-box/foul-selection-box.component';

import { ButtonModule } from 'primeng/button';
import { OverviewBoxComponent } from './overview-box/overview-box.component'

@NgModule({
  declarations: [
    AppComponent,
    ScoreBoardComponent,
    BallSelectionBoxComponent,
    FoulSelectionBoxComponent,
    OverviewBoxComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
