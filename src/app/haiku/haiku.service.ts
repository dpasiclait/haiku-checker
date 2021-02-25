import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Haiku } from "./haiku";
import { SyllableCount } from "./syllable-count";

@Injectable({ providedIn: 'root' })
export class HaikuService {
  private BACKEND_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHaikuSyllablesCount(firstLine: string, secondLine: string, thirdLine: string): Observable<{ payload: SyllableCount, timestamp: number }> {
    const haiku: Haiku = {
      firstLine,
      secondLine,
      thirdLine
    }

    return this.http.post<{ payload: SyllableCount, timestamp: number }>(this.BACKEND_URL, haiku);
  }
}
