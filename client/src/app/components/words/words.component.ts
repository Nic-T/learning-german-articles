import { Component, OnInit } from '@angular/core';
import { Word } from '../../interface/word';
import { WordsService } from '../../service/words.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
})
export class WordsComponent implements OnInit {
  words: Word[] = [];

  constructor(private wordsService: WordsService) {}

  ngOnInit(): void {
    this.getWords();
  }

  async getWords(): Promise<void> {
    (await this.wordsService.getWords()).subscribe(
      (words) => (this.words = words),
    );
  }
}
