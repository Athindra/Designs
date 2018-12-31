import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UIModule } from './DIR-Layout/ui.module';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
     ],
  imports: [
    BrowserModule,
    UIModule,
    NgbModalModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes)
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
