import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IContactPerson } from './contactPerson';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contactPersons = [{
      "id": 1,
      "deliveryFlag": true,
      "type": {
        "code": 0,
        "value": ""
      },
      "name": "הדר מן",
      "phoneNumber": 529876786,
      "email": "",
      "address": ""
    },{
      "id": 1,
      "deliveryFlag": true,
      "type": {
        "code": 0,
        "value": ""
      },
      "name": "חן שלוה ",
      "phoneNumber": 527657865,
      "email": "dfdf@gmail.com",
      "address": ""
    }]
    return {contactPersons};
  }
  
  genId(contactPersons: IContactPerson[]): number {
    return contactPersons.length > 0 ? Math.max(...contactPersons.map(contactPerson => contactPerson.id)) + 1 : 11;
  }
  
}