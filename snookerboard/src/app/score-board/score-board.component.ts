import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../model/game';
import { Frame } from '../model/frame';

@Component({
  selector: 'score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {
  
  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }

}
