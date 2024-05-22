import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './games.models';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private readonly baseUrl = 'http://localhost:3000/games'

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl)
  }

  public get(id: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/${id}`)
  }

  public add(game: Game): Observable<void> {
    return this.http.post<void>(this.baseUrl, game)
  }

  public update(game: Game): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${game.id}`, game)
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }
}
