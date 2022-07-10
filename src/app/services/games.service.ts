import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '80fdc48ae6msh69472610a1d0830p12fb95jsn1f786b33516c',
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private apiUrl = 'https://rawg-video-games-database.p.rapidapi.com/games?key=01f4e396175646ff84d319d91453def7';

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get(this.apiUrl,options);
  }

}

