import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mergeMap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': environment.RapidApiKey,
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};

@Injectable({
  providedIn: 'root'
})

export class GamesService {

  $games?: Observable<{}>;

  private apiUrl = `https://rawg-video-games-database.p.rapidapi.com/games?key=${environment.rawgApiKey}`;

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {    
    return this.$games = this.http.get(this.apiUrl + '&page=' + 1,options);
  }

  getMoreGames(page:number): Observable<any> {    
    return this.$games = this.http.get(this.apiUrl + '&page=' + page,options);
  }

}

