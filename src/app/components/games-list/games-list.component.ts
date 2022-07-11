import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/interface/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  games: Game[] =[];
  nextPage: number = 2;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe((games) => {
      this.games = games.results;
      this.nextPage++;
      // console.log(games);           
    });
  }

  getMoreGames(){
    this.gamesService.getMoreGames(this.nextPage).subscribe((games) => {
      this.games = this.games.concat(games.results);   
      if(!games.next){return} 
      this.nextPage++;
    });
  }

}
