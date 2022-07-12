import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/interface/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  id: number;
  game:Game ={};

  constructor(private gamesService: GamesService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.gamesService.getGameDetails(this.id).subscribe(game =>{
      this.game = game;
      console.log(game);
      
    })
  }

}
