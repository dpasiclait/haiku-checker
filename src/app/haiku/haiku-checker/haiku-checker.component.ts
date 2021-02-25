import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HaikuService } from "../haiku.service";
import { SyllableCount } from "../syllable-count";

@Component({
  selector: 'app-haiku-checker',
  templateUrl: './haiku-checker.component.html',
  styleUrls: ['./haiku-checker.component.css']
})
export class HaikuCheckerComponent {
  firstCount: number = 0;
  secondCount: number = 0;
  thirdCount: number = 0;

  constructor(private haikuService: HaikuService) { }

  // placers two writable best prosing
  checkHaiku(form: NgForm) {
    if (form.invalid) { return; };

    const { firstVerse, secondVerse, thirdVerse } = form.value;

    this.haikuService.getHaikuSyllablesCount(
      firstVerse.replace(/\s+/g,' ').trim(),
      secondVerse.replace(/\s+/g,' ').trim(),
      thirdVerse.replace(/\s+/g,' ').trim()
    )
      .subscribe(response => {
        const {
          firstVerseCount,
          secondVerseCount,
          thirdVerseCount,
        }: SyllableCount = response.payload;

        this.firstCount = firstVerseCount;
        this.secondCount = secondVerseCount;
        this.thirdCount = thirdVerseCount;
      });
  }
}
