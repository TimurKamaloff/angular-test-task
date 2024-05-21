import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderNumberComponent } from './components/slider-number/slider-number.component';
import { SliderRangeComponent } from './components/slider-range/slider-range.component';
import { SliderStepsComponent } from './components/slider-steps/slider-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderNumberComponent,
    SliderRangeComponent,
    SliderStepsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
