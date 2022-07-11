import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './interface/game';
import { GamesService } from './services/games.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OnlyGames';
  games: Game[] = [];

  constructor(private gamesService: GamesService){}

  ngOnInit(): void {
    // this.gamesService.getGames().subscribe((games) => {
    //   this.games = games.results;
    //   console.log(games.results[1]);      
    //   console.log(games);      
    // });
  }
}
