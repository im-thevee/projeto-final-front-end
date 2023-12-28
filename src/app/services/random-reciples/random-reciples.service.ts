import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomReciplesService {
  constructor(private http: HttpClient) {  }
  listRandomFood(take: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=aaf71ed821ba45c9a7def82e44779240&number=${take}`;

    return this.http.get(apiUrl);
  }
}
