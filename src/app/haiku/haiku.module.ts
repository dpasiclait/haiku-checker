import {
  CommonModule
} from "@angular/common";
import {
  NgModule
} from "@angular/core";
import {
  FormsModule
} from "@angular/forms";
import {
  AngularMaterialModule
} from "../angular-material.module";
import {
  HaikuCheckerComponent
} from "./haiku-checker/haiku-checker.component";
import {
  HaikuFactsComponent
} from "./haiku-facts/haiku-facts.component";

@NgModule({
  declarations: [
    HaikuCheckerComponent,
    HaikuFactsComponent,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    FormsModule
  ]
})
export class HaikuModule {

}
