import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HaikuCheckerComponent } from "./haiku-checker/haiku-checker.component";
import { HaikuFactsComponent } from "./haiku-facts/haiku-facts.component";

@NgModule({
  declarations: [
    HaikuCheckerComponent,
    HaikuFactsComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class HaikuModule {

}
