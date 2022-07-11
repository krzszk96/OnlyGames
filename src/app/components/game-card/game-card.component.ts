import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/interface/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() game:Game ={};

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    
  }

  // gameDetails(game: Game){
  //   console.log(game);
    
  // }
  getDetails(gameId:any){
    this.gamesService.getGameDetails(gameId).subscribe(data =>{
      console.log(data);
      
    })
  }

}
