import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm ,ControlContainer, NgModelGroup} from '@angular/forms';

@Component({
  selector: 'app-information-concentration',
  templateUrl: './information-concentration.component.html',
  styleUrls: ['./information-concentration.component.scss'],
  viewProviders:[{provide:ControlContainer,useExisting:NgModelGroup}]
})

export class InformationConcentrationComponent implements OnInit {
  @Input() insured: any;
  @Input() superClaim: any;

  contactPersonType = [
    { code: 1, value: 'מבוטח' },
    { code: 2, value: 'סוכן' },
    { code: 3, value: 'בן/בת זוג' },
  ];

  superClaimType = [
    { code: 1, value: "התביעה אושרה" },
    { code: 2, value: "התביעה נדחתה" },
    { code: 4, value: "טרם התקבלה החלטה" }
  ];

  claimCause = [
    { code: 1, value: "תאונה" },
    { code: 2, value: "מחלה" },
    { code: 5, value: "תאונת עבודה" },
    { code: 6, value: "אחר" },
  ];

  injuryType = [
    { code: 1, value: "אגן" },
    { code: 2, value: "גפיים" },
    { code: 5, value: "ראש" },
    { code: 6, value: "גב" },
    { code: 7, value: "לב" },
    { code: 9, value: "נפש" },
  ];

  submitionMethod = [
    { code: 1, value: 'דואר' },
    { code: 2, value: 'דיגיטל' },
    { code: 3, value: 'פקס' },
  ];

  identityTypes = [
    { code: 1, value: 'ת.ז.' },
    { code: 2, value: 'דרכון' },
    { code: 3, value: 'מבוטח' },
    { code: 4, value: 'מפעל' }
  ];

  constructor() { };

  

  ngOnInit(): void {
   
  }

}
