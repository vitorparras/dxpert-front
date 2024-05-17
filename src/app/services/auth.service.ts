import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ApiUrls } from '../../environments/environments';
import { localStorageVarNames } from '../../environments/localStorageVarNames';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  logar(usuario: any): Observable<any> {
    return this.httpClient.post<any>(ApiUrls.Auth + '/Login', usuario).pipe(
      tap((resposta) => {
        if (resposta.success == true) {
          localStorage.setItem(localStorageVarNames.Token, resposta.data['token']);
          localStorage.setItem(localStorageVarNames.NomeUsuario, resposta.data['nome']);
          localStorage.setItem(localStorageVarNames.IdUser, resposta.data['idUser']);
        }
      }),
      catchError(this.handleError)
    );
  }

  deslogar() {
    this.httpClient.post<any>(ApiUrls.Auth + '/Logout', null).subscribe({
      next: (resposta) => {
        if (resposta.success == true) {
          console.log('Deslogado com sucesso:', resposta);
        }else{
          console.error('Erro ao deslogar:', resposta);
        }
        localStorage.clear();
        this.router.navigate(['login']);
      },
      error: (error) => {
        console.error('Erro ao deslogar:', error);
        localStorage.clear();
        this.router.navigate(['login']);
      }
    });
  }

  get obterTokenUsuario(): string {
    return localStorage.getItem(localStorageVarNames.Token) ?? '';
  }

  get logado(): boolean {
    return localStorage.getItem(localStorageVarNames.Token) ? true : false;
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
}
