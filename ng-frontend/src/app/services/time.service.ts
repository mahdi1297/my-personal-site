import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  constructor() {}

  //convert time to readable shamsi format
  toShamsi(dateToConvert: string) {
    return new Date(dateToConvert).toLocaleDateString('fa-IR');
  }
}
