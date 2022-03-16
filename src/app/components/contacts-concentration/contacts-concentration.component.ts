import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IContactPerson } from 'src/app/contactPerson';

@Component({
  selector: 'app-contacts-concentration',
  templateUrl: './contacts-concentration.component.html',
  styleUrls: ['./contacts-concentration.component.scss']
})
export class ContactsConcentrationComponent implements OnInit {
  @Input() contactPersons!: IContactPerson[];
  @Output() clearContacts = new EventEmitter<string>();
  @Input() insured: any;
  newContact!: IContactPerson;
  constructor() { }

  ngOnInit(): void {
  }

  addInshured(){
    this.newContact = {
      id: this.contactPersons.length+1,
      deliveryFlag: false,
      type: {
          code: 1,
          value: 'מבוטח',
      },
      name: this.insured.firstName +" "+ this.insured.lastName,
      phoneNumber: 292929292,//this.insured.phoneNumber,
      email: "ew@ddd",//this.insured.email,
      address: this.insured.address.streetName+ " " + this.insured.address.cityName,
    }
    this.contactPersons.push(this.newContact);
  }

  deleteContacts(option: string){
    this.clearContacts.emit(option);
  }

}
