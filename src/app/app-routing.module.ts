import {
  NgModule
} from "@angular/core";
import {
  RouterModule,
  Routes
} from "@angular/router";
import {
  HaikuCheckerComponent
} from "./haiku/haiku-checker/haiku-checker.component";
import {
  HaikuFactsComponent
} from "./haiku/haiku-facts/haiku-facts.component";

const routes: Routes = [{
    path     : '',
    component: HaikuCheckerComponent
  },
  {
    path     : 'facts',
    component: HaikuFactsComponent
  },
  {
    path        : 'about',
    loadChildren: () => import('./about/about.module')
      .then(module => module.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
