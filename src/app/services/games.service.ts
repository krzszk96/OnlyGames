import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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


  private apiUrl = `https://rawg-video-games-database.p.rapidapi.com/games?key=${environment.rawgApiKey}`;

  constructor(private http: HttpClient) { }

  getGames(page:number): Observable<any> {    
    return this.http.get(this.apiUrl + '&page=' + page, options);
  }

  getMoreGames(page:number): Observable<any> {    
    return this.http.get(this.apiUrl + '&page=' + page, options);
  }
  getGameDetails( id:number): Observable<any> {    
    return this.http.get(`https://rawg-video-games-database.p.rapidapi.com/games/${id}?key=${environment.rawgApiKey}` , options);
  }


}

