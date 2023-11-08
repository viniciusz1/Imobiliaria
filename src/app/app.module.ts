import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelasModule } from './telas/telas.module';
import { HttpClientModule } from '@angular/common/http';
// import { ImobFilterPipe } from './imob-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // ImobFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    TelasModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
