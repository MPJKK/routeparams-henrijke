import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let koko: string;
    // jaa split-funkitolla tiedsotn nimi (value) osiin,
    const temp = value.split('.');
    console.log(temp[0]);
    // Tallenna tulos nimellä temp

    // swtocj / case lause
    // jos args on small, koko = 160
    // jos args on medium, koko = 320
    // jos args on large koko ) 640
    switch (args) {
      case 'small':
        koko = '160';
        console.log('käytiin täällä');
        break;
      case 'medium':
        koko = '320';
        break;
      case 'large':
        koko = '640';
        break;
      default:
        console.log('lol virhe');
        koko = '160';
        break;
    }

    return temp[0] + '-tn' + koko + '.png';
  }

}
