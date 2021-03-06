import {
  Component
} from "@angular/core";
import {
  NgForm
} from "@angular/forms";
import {
  MatDialog
} from "@angular/material/dialog";
import {
  ErrorComponent
} from "src/app/error/error.component";
import {
  HaikuService
} from "../haiku.service";
import {
  SyllableCount
} from "../syllable-count";

@Component({
  selector   : 'app-haiku-checker',
  templateUrl: './haiku-checker.component.html',
  styleUrls  : [
    './haiku-checker.component.css',
    './blob.css',
    '../../../assets/css/color-scheme.css'
  ]
})
export class HaikuCheckerComponent {
  firstCount : number = 0;
  secondCount: number = 0;
  thirdCount : number = 0;

  constructor(
    private haikuService: HaikuService,
    private dialog      : MatDialog
  ) {}

  checkHaiku(form: NgForm) {
    if (form.invalid) {
      alert('Please fill the missing verses');
      return;
    };

    let {
      firstVerse,
      secondVerse,
      thirdVerse
    } = form.value;

    this.haikuService.getHaikuSyllablesCount(
      firstVerse.replace(/\s+/g, ' ').trim(),
      secondVerse.replace(/\s+/g, ' ').trim(),
      thirdVerse.replace(/\s+/g, ' ').trim()
    ).subscribe(
      (response: {
        payload  : SyllableCount,
        timestamp: number
      }) => {
        const {
          firstVerseCount,
          secondVerseCount,
          thirdVerseCount,
          unknownWords,
        }: SyllableCount = response.payload;

        this.firstCount  = firstVerseCount;
        this.secondCount = secondVerseCount;
        this.thirdCount  = thirdVerseCount;

        if (unknownWords && unknownWords.length > 0) {
          let message = 'the following words are not recognized by our dictionary and will be removed from your haiku:\n';

          unknownWords.forEach(word => {
            message += `${word} `;

            firstVerse  = firstVerse.replace(word, '').replace(/\s+/g, ' ').trim();
            secondVerse = secondVerse.replace(word, '').replace(/\s+/g, ' ').trim();
            thirdVerse  = thirdVerse.replace(word, '').replace(/\s+/g, ' ').trim();
          });

          form.setValue({
            'firstVerse' : firstVerse,
            'secondVerse': secondVerse,
            'thirdVerse' : thirdVerse
          });

          this.dialog.open(ErrorComponent, {
            data: {
              message
            }
          });
        }
      },
      (error: any) => {
        alert('We are experiencing some server issues. Please come back at a later time.');
        console.log(error);
      }
    );
  }
}
