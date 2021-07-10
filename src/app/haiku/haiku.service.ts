import {
  HttpClient
} from "@angular/common/http";
import {
  Injectable
} from "@angular/core";
import {
  Observable
} from "rxjs";
import { environment } from "src/environments/environment.prod";
import {
  Haiku
} from "./haiku";
import {
  SyllableCount
} from "./syllable-count";

@Injectable({
  providedIn: 'root'
})
export class HaikuService {
  private BACKEND_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHaikuSyllablesCount(firstVerse: string, secondVerse: string, thirdVerse: string): Observable < {
    payload  : SyllableCount,
    timestamp: number
  } > {
    const haiku: Haiku = {
      firstVerse,
      secondVerse,
      thirdVerse
    };

    return this.http.post < {
      payload  : SyllableCount,
      timestamp: number
    } > (this.BACKEND_URL, haiku);
  }
}
