import {
  Component
} from "@angular/core";
import { environment } from "src/environments/environment.prod";

@Component({
  selector   : 'app-header',
  templateUrl: './header.component.html',
  styleUrls  : ['./header.component.css', '../../assets/css/color-scheme.css']
})
export class HeaderComponent {
  version: string = environment.Version;
}
