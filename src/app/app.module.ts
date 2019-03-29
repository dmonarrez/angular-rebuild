import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { FootComponent } from './foot/foot.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
