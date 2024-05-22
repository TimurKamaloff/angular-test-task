import {Component, Input, forwardRef} from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-slider-steps',
  templateUrl: './slider-steps.component.html',
  styleUrls: ['./slider-steps.component.scss'],
  standalone: true,
  imports: [
    MatStepperModule,
  ],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderStepsComponent),
    multi: true
   }],
})
export class SliderStepsComponent implements ControlValueAccessor{
  @Input() stepsArray: string[] | number[] = [];
  public selectedStepIndex: number;

  public readonly EMPTY_STEPS = ['', '', '', '', '',]

  public get steps():  string[] | number[] {
    return this.stepsArray.length ? this.stepsArray : this.EMPTY_STEPS;
  }

  public onChange(_: any) {}

  public writeValue(value: any) {
    this.selectedStepIndex = value;
   }
  
  public registerOnChange(fn: () => {}) {
    this.onChange = fn;
  }
  
  public registerOnTouched() {}

  public onStepChange(selectedStepIndex: number): void {
    this.selectedStepIndex = selectedStepIndex;
    this.onChange(selectedStepIndex);
  }
}
