/*import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private currencyPipe: CurrencyPipe, private decimalPipe: DecimalPipe) { }

  transformAmount(value: any) {

    if (value === null || value === undefined) {
      return null;
    }

    let val = value;
    val = val.replace(/\D/g, ''); // substitui qualquer caracter que não seja número por nada
    val = val.replace(/(\d)(\d{2})$/, '$1,$2'); // coloca virgula antes dos 2 últimos dígitos
    val = val.replace(/(?=(\d{3})+(\D))\B/g, '.'); // coloca ponto a cada 3 dígitos
    if (val.length > 0) {
      val = `R$ ${val}`; // adiciona o prefixo
    }
    return val;
  }

  formatarParaReal(valor: any): string | null {

    if (valor === null || valor === undefined) {
      return null;
    }

    let valorNumerico = parseFloat(valor.replace(',', '.'));
    return this.currencyPipe.transform(valorNumerico, 'BRL', 'symbol', '1.2-2', 'pt-BR');
  }

  converterNumero(numero: any): number {
    var numeroLimpo = numero.replace(',', '');
    numeroLimpo = numeroLimpo.replace('.', ',');
    const numeroConvertido = this.decimalPipe.transform(numeroLimpo);

    if (numeroConvertido === null) {
      throw new Error(`'${numero}' não é um número válido`);
    }

    return Number(numeroConvertido);
  }
}
*/
