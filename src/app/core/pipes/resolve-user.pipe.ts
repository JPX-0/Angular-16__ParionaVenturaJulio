import { Pipe, PipeTransform } from '@angular/core';
import { AccountType } from '../models/session.model';

@Pipe({
  name: 'resolveUser'
})
export class ResolveUserPipe implements PipeTransform {

  transform(data: null | AccountType | "invitado"): string {
    if(data) {
      if(typeof data != "string") 
        return `${data.firstName} ${data.lastName}`;
      else return data == "invitado" ? "usted está ingresando como Invitado" : data
    } else return "...";
  }

}
