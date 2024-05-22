import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-task';

  sliderNumberValue = 0;
  sliderRangeValue = {
    from: 0,
    to: 100,
  }

  form = new FormGroup({
    sliderNumberValueControl: new FormControl(0),
    sliderRangeValueControl: new FormControl({
      from: 0,
      to: 100,
    }),
    sliderStepValueControl: new FormControl(0),
  });
}
