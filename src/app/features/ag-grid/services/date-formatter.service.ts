import { Injectable } from '@angular/core';
import { AgGridFormatter } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class DateFormatterService implements AgGridFormatter {
  constructor() { }
  
  format(value: any, formatterValue?: any): string {
    if (!value) {
      return ''; // Handle null/undefined
    }

    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return ''; // Handle invalid dates
    }

    // Format as DD/MM/YYYY (or customize based on formatterValue)
    const format = formatterValue || 'DD/MM/YYYY';
    return this.formatDate(date, format);
  }

  private formatDate(date: Date, format: string): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    // Simple format parsing (extend for more formats if needed)
    return format
      .replace('DD', day)
      .replace('MM', month)
      .replace('YYYY', year);
  }
}