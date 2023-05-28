import { Pipe, PipeTransform } from '@angular/core';
import { utc, tz } from 'moment-timezone';

@Pipe({
  name: 'localTime',
  standalone: true
})
export class LocalTimePipe implements PipeTransform {

  transform(timestamp: number, format?: string): string {
    return utc(new Date(timestamp * 1000).toISOString())
      .tz(tz.guess())
      .local()
      .format(format || "MMMM D, YYYY [at] h:mm A");
  }

}
