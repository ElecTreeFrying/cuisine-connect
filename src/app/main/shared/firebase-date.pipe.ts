import { Pipe, PipeTransform } from '@angular/core';
import { utc, tz } from 'moment-timezone';

@Pipe({
  name: 'firebaseDate',
  standalone: true
})
export class FirebaseDatePipe implements PipeTransform {

  transform(value?: string): string {
    if (!value) return new Date().toISOString();
    value = value.split(' ')[4];
    const timeParts = value.split(':');
    const date = new Date();
    date.setHours(parseInt(timeParts[0]));
    date.setMinutes(parseInt(timeParts[1]));
    date.setSeconds(parseInt(timeParts[2]));
    value = utc(date.toISOString())
      .tz(tz.guess())
      .local()
      .format("MMMM D, YYYY [at] h:mm A");
    return value;
  }

}
