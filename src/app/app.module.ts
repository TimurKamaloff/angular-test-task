import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderNumberComponent } from './components/slider-number/slider-number.component';
import { SliderRangeComponent } from './components/slider-range/slider-range.component';
import { SliderStepsComponent } from './components/slider-steps/slider-steps.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SliderNumberComponent,
    SliderRangeComponent,
    SliderStepsComponent,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
