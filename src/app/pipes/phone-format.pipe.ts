import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'PhoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
    transform(value?: number): string {
        if (value) {
            var phoneString = value.toString()
            return "0" + phoneString.slice(0, 2) + "-" + phoneString.slice(2, phoneString.length);
        }
        return "";
    }

}