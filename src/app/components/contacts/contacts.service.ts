import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IContactPerson } from 'src/app/contactPerson';


@Injectable({
  providedIn: 'root',
})

export class ContactService  {

  private contactUrl = 'api/contactPersons';
  constructor(private http: HttpClient) { }

  getContacts(): Observable<IContactPerson[]> {
    return this.http.get<IContactPerson[]>(this.contactUrl).pipe(
      tap(contact => console.log(contact)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    var error = err.message;
    console.error(error);
    return throwError(error);
  }

}