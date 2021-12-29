import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : "countryCode"
})
export class CountryCodePipe implements PipeTransform {
  transform(value: any, code : string ) {
      switch (code) {
        case 'USA': return "+1 " + value
        case 'AUS': return "+21 " + value
        case 'EUR': return "+99 " + value
        default: return "+91 " + value;
      }
  }
}

// Create Reverse pipe - should reverse string value
