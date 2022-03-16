import { Component, Input, OnInit, Output, ViewChild ,EventEmitter, OnChanges} from '@angular/core';
import { IContactPerson } from 'src/app/contactPerson';
import { ContactService } from './contacts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ContactService]
})

export class ContactsComponent implements OnInit {
  @Input() contactPersons!: IContactPerson[];
  @Output() updateContactPersons = new EventEmitter<IContactPerson[]>();
  isAddContact: boolean = false;
  newContactPerson!: IContactPerson;
  contactPersonType: any = undefined;
  onlyHebrewPattern = /^[א-ת\s]+$/;
  @ViewChild('contactForm') contactForm!: NgForm;

  contactPersonTypes = [
    { code: "1", value: 'מבוטח' },
    { code: "2", value: 'סוכן' },
    { code: "3", value: 'בן/בת זוג' },
  ];
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(
      contacts => {
        this.contactPersons = contacts;
        this.updateContactPersons.emit(this.contactPersons);
      },
    ); 
  }

  addNewContact():void{
    var typeValue = this.contactPersonTypes.filter(cpt=>cpt.code==this.contactPersonType)[0].value;
    this.newContactPerson.type={code:this.contactPersonType,value:typeValue};
    this.contactPersons.push(this.newContactPerson);
    this.isAddContact = false;
    this.updateContactPersons.emit(this.contactPersons);
  }

  addContactPersonRow():void{
    this.newContactPerson = {
      "id": this.contactPersons.length+1,
      "deliveryFlag": false,
      "type": undefined,//{
      //   "code": ,
      //   "value": ""
      // },
      "name": "",
      "phoneNumber": undefined,
      "email": "",
      "address": ""
    } 
    this.contactPersonType = undefined;
    this.isAddContact = true;
  }

  onDeliveryFlagChaned(){
    this.updateContactPersons.emit(this.contactPersons);
  }

}
