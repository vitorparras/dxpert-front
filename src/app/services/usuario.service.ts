/*import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiUrls } from '../../environments/environments';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  constructor(private httpClient: HttpClient, private router: Router) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  findUser(id: number): Observable<any> {
    return this.httpClient.get<any>(`${ApiUrls.Usuario}/FindById?id=${id}`)
      .pipe(catchError(this.handleError));
  }

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${ApiUrls.Usuario}/List`)
      .pipe(catchError(this.handleError));
  }

  deleteUser(usuario: number): Observable<any> {
    return this.httpClient.delete<any>(`${ApiUrls.Usuario}/Delete/${usuario}`)
      .pipe(catchError(this.handleError));
  }

  editUser(userData: any): Observable<any> {
    return this.httpClient.put<any>(`${ApiUrls.Usuario}/Edit`, userData)
      .pipe(catchError(this.handleError));
  }

  addUser(userData: any): Observable<any> {
    return this.httpClient.post<any>(`${ApiUrls.Usuario}/Add`, userData)
      .pipe(catchError(this.handleError));
  }
}
*/
