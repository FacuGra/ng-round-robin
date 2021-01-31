import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ContentModule } from './main/content/content.module';
import { HeaderModule } from './main/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    ContentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
