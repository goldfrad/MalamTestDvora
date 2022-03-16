import { Component, Input, Output, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProcess } from './process';
import { IContactPerson } from 'src/app/contactPerson';

@Component({
  selector: 'app-root',
  templateUrl: './app.Component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MalamTest';
  @ViewChild('processForm') processForm!: NgForm;
  insured: any;
  superClaim: any;
  contactPersons: any;
  isContinue: boolean = false;
  process: IProcess = {
    'superClaim': {
      'superClaimNum': 500040204,
      'superClaimStatus': {
        code: 1,
        value: 'פתוחה',
      },
      'superClaimType': undefined,//{
      // code: 0,
      // value: '',
      // },
      'eventDate': undefined,//0,
      'claimCause': undefined,//{
      //   code: 2,
      //   value: 'מחלה',
      // },
      'injuryType': undefined,//{
      //   code: 0,
      //   value: '',
      // },
      'submitedBy': 1,
      'submitionMethod': undefined,//{
      //   code: 0,
      //   value: '',
      // },
    },
    'insured': {
      'address': {
        'cityName': 'רעננה',
        'streetName': 'אחוזה',
      },
      'identityType': 12,
      'age': 60,
      'lastName': 'כהן',
      'identity': 205446753,
      'firstName': 'הילה',
      //'phoneNumber': 087875645,
      // 'email': 'aaa@fff.com',
    },
    'contactPersons': []
  }

  ngOnInit(): void {
    this.insured = this.process.insured;
    this.superClaim = this.process.superClaim;
    this.contactPersons = this.process.contactPersons;
  }

  updateContactPersons(contactPersons: IContactPerson[]) {
    this.contactPersons = contactPersons;
  }

  onResetForm(): void {
    this.processForm.reset();
  }

  continue(): void {
    console.log(this.processForm);
  }

  isFormValid(): boolean {
    var cp = this.contactPersons.filter((cp: { deliveryFlag: boolean; }) => cp.deliveryFlag == true)
    if ((this.processForm&&this.processForm.status == 'INVALID')||cp.length==0)
      return false;
    return true;
  }

  clearContacts(option: string): void {
    if (option == 'full')
      this.contactPersons = [];
    else {
      this.contactPersons = this.contactPersons.filter((cp: { deliveryFlag: boolean; }) => cp.deliveryFlag == true);
    }
  }
}
