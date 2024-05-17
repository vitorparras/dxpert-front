/*import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiUrls } from '../../environments/environments';
@Injectable({
  providedIn: 'root',
})
export class RelatorioService {
  constructor(private http: HttpClient) {}

  getRelatorio(id: any) {
    return this.http.get(ApiUrls.Relatorio + '/GetRelatorio?cadastro=' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  getEvolucaoDeCustos(id: number, valorMorte: string, valorInvalidez: string) {
    const params = new HttpParams()
      .set('Cadastro', id.toString())
      .set('ValorMorte', valorMorte)
      .set('ValorInvalidez', valorInvalidez);

    return this.http.get(ApiUrls.Relatorio + '/CalcularValorEvolucaoDeCustos', { params })
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
}
*/
