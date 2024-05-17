
/*import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiUrls } from '../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient, private router: Router) {}

  edit(data: any): Observable<any> {
    return this.httpClient.put<any>(ApiUrls.Cadastro + '/AddOrUpdate', data)
      .pipe(
        catchError(this.handleError)
      );
  }

  list(): Observable<any> {
    return this.httpClient.get<any>(ApiUrls.Cadastro + '/List')
      .pipe(
        catchError(this.handleError)
      );
  }

  addDescendentes(data: any): Observable<any> {
    return this.httpClient.post<any>(ApiUrls.Cadastro + '/AddDescendentes', data)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAcompanhamentosByUser(data: any): Observable<any> {
    return this.httpClient.get<any>(ApiUrls.Cadastro + '/Acompanhamentos/' + data)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAcompanhamentos(): Observable<any> {
    return this.httpClient.get<any>(ApiUrls.Cadastro + '/Acompanhamentos')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      errorMessage = `Código do erro: ${error.status}, mensagem: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}*/
