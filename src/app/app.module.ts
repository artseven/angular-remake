import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProfileComponent,
    SearchComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
