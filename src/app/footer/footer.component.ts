import {
  Component
} from "@angular/core";
import { environment } from "src/environments/environment.prod";

@Component({
  selector   : 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls  : ['./footer.component.css']
})
export class FooterComponent {
  github = `${environment.AWS3Name}/github`;
  linkedIn = `${environment.AWS3Name}/linkedIn`;
  // github = `http://localhost:4200/github`;
  // linkedIn = `http://localhost:4200/linkedIn`;
}
