import { Injectable } from '@angular/core';
import { AgGridFormatter } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyFormatterService implements AgGridFormatter {
  // currency: CurrencyPipe = inject(CurrencyPipe);

  constructor() { }
  
  format(value: any, formatterValue?: any): string {
    if (!value) {
      return ''; // Handle null/undefined
    }
    return value;
  }
}