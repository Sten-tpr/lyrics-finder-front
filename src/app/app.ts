import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SongResult } from './models/song-result.model';
import { LyricsService } from './services/lyrics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  query = '';
  loading = signal(false);
  result = signal<SongResult | null>(null);

  constructor(private lyricsService: LyricsService) {}

  search() {
    this.loading.set(true);
    this.lyricsService.searchLyrics(this.query).subscribe({
      next: (res) => this.result.set(res),
      error: () => this.result.set({ title: 'Inconnu', artist: 'Inconnu' }),
      complete: () => this.loading.set(false),
    });
  }
}