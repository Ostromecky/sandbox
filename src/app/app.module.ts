import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { PageComponent } from "./page/page.component";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, PageComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "welcome", component: NxWelcomeComponent },
      { path: "page", component: PageComponent },
      { path: "**", redirectTo: "welcome", pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
