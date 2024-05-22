import {ChangeDetectionStrategy, Component, Input, OnInit, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { SliderRangeFields, SliderRangeValue } from 'src/app/common/interfaces/slider-interfaces';

@Component({
  selector: 'app-slider-range',
  templateUrl: './slider-range.component.html',
  styleUrls: ['./slider-range.component.scss'],
  standalone: true,
  imports: [MatSliderModule],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderRangeComponent),
    multi: true
   }],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderRangeComponent implements ControlValueAccessor, OnInit {
  @Input() max = 100;
  @Input() min = 0;
  @Input() step = 1;
  @Input() showTickMarks = false;
  @Input() discrete = true;
  @Input() disabled = false;
  @Input() displayWithFn = this.formatLabel;
  value: SliderRangeValue;

  public readonly SLIDER_RANGE_FIELDS = SliderRangeFields;

  ngOnInit(): void {
    this.value = {
      from: this.min,
      to: this.max,
    };
  }

  public onChange(_: any) {}

  public inputChange(inputValue: number, entity: SliderRangeFields): void {
    this.value = {
      ...this.value,
      [entity]: inputValue,
    };
    this.onChange(this.value);
  }

  public writeValue(value: SliderRangeValue): void {
    this.value = {
      ...value
    };
   }
  
   public registerOnChange(fn: () => {}): void {
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
