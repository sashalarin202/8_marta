import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputmaskOptions } from '@ngneat/input-mask';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrl: './keyword.component.scss'
})
export class KeywordComponent {
  @Input() formControl!: FormControl;
  @Input() inputMask!: InputmaskOptions<any>;
  @Input() maskPlaceholder: string | undefined;

  toUpper() {
    const value = this.formControl.value;
    this.formControl.setValue(value.toUpperCase(), {emitEvent: false});
  }
}
