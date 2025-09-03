import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SongResult } from '../models/song-result.model';


@Injectable({
  providedIn: 'root'
})
export class LyricsService {
  private apiUrl = 'http://localhost:8080/api/lyrics';

  constructor(private http: HttpClient) {}

  searchLyrics(query: string): Observable<SongResult> {
    return this.http.get<SongResult>(`${this.apiUrl}/search?query=${encodeURIComponent(query)}`);
  }
}