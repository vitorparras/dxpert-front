import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IUsuario } from "../../interfaces/Usuario";
import { AuthService } from "../../services/auth.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide = true;
  public message = '';
  public messageBemVindo = '';
  public sucesso = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {

  }

  ngOnInit() { }

  public logar() {
    const email = (document.getElementById('Email') as HTMLInputElement)?.value;
    const senha = (document.getElementById('Senha') as HTMLInputElement)?.value;

    if (!email || !senha) {
      this.snackBar.open('Preencha todos os campos corretamente.', 'Fechar', {
        duration: 3000,
      });
      return;
    }

    const usuario: IUsuario = {
      Email: email,
      Senha: senha,
    };

    this.authService.logar(usuario).subscribe(
      (response: any) => {
        this.sucesso = response.success;
        if (response.success) {
          this.message = 'Login realizado com sucesso!';
          this.messageBemVindo = 'Bem-vindo ' + response.data.nome;
          this.snackBar.open(this.messageBemVindo, 'Fechar', {
            duration: 3000,
          });
          setTimeout(() => {
            this.router.navigate(['index']);
          }, 1000);
        } else {
          this.message = 'Erro ao realizar o Login!';
          this.snackBar.open(this.message, 'Fechar', {
            duration: 3000,
          });
        }
      },
      (error) => {
        this.message = 'Erro ao realizar o Login!';
        this.snackBar.open(this.message, 'Fechar', {
          duration: 3000,
        });
      }
    );
  }
}
