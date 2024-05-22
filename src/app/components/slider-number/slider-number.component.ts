import {ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-slider-number',
  templateUrl: './slider-number.component.html',
  styleUrl: './slider-number.component.scss',
  standalone: true,
  imports: [MatSliderModule],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderNumberComponent),
    multi: true
   }],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderNumberComponent implements ControlValueAccessor{

  @Input() max = 100;
  @Input() min = 0;
  @Input() step = 1;
  @Input() showTickMarks = false;
  @Input() discrete = true;
  @Input() disabled = false;
  @Input() displayWithFn = this.formatLabel;
  private value: number = 0;

  public onChange(_: any) {}

  public writeValue(value: any) {
    this.value = value;
   }
  
  public registerOnChange(fn: () => {}) {
    this.onChange = fn;
  }
  
  public registerOnTouched() {}

  public formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
