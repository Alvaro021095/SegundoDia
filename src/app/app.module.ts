import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyHightLightDirective } from './my-hight-light.directive';
import { MyPepiPipe } from './my-pepi.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyHightLightDirective,
    MyPepiPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
