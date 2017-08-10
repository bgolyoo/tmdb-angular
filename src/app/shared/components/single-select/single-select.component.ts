import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SingleSelectComponent),
  multi: true
};

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SingleSelectComponent implements OnInit, ControlValueAccessor {

  @Input() selected = '';
  @Input() options: Array<string> = [];
  private _selection: string;

  // Placeholders for the callbacks which are later providesd by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() { }

  ngOnInit(): void {
    this.selectedOption = this.selected;
  }

  // get accessor
  get selectedOption(): any {
    return this._selection;
  }

  // set accessor including call the onchange callback
  set selectedOption(v: any) {
    if (v !== this._selection) {
      this._selection = v;
      this.onChangeCallback(v);
    }
  }

  // Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  // From ControlValueAccessor interface
  writeValue(value: any): void {
    if (value !== this._selection) {
      this._selection = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

}
