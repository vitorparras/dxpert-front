import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IUsuario } from '../../interfaces/Usuario';
import { AuthService } from '../../services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import jQuery from 'jquery';
const $ = jQuery;

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

  constructor(private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    $(document).ready(function () {
      var animating = false,
        submitPhase1 = 1100,
        submitPhase2 = 400,
        logoutPhase1 = 800,
        $login = $('.login'),
        $app = $('.app');

      function ripple(elem: any, e: any) {
        $('.ripple').remove();
        var elTop = elem.offset().top,
          elLeft = elem.offset().left,
          x = e.pageX - elLeft,
          y = e.pageY - elTop;
        var $ripple = $("<div class='ripple'></div>");
        $ripple.css({ top: y, left: x });
        elem.append($ripple);
      }

      $(document).on('click', '.login__submit', function (e) {
        if (animating) return;
        animating = true;
        var that = this;
        ripple($(that), e);
        $(that).addClass('processing');
        setTimeout(function () {
          $(that).addClass('success');
          setTimeout(function () {
            $app.show();
            $app.css('top');
            $app.addClass('active');
          }, submitPhase2 - 70);
          setTimeout(function () {
            $login.hide();
            $login.addClass('inactive');
            animating = false;
            $(that).removeClass('success processing');
          }, submitPhase2);
        }, submitPhase1);
      });

      $(document).on('click', '.app__logout', function (e) {
        if (animating) return;
        $('.ripple').remove();
        animating = true;
        var that = this;
        $(that).addClass('clicked');
        setTimeout(function () {
          $app.removeClass('active');
          $login.show();
          $login.css('top');
          $login.removeClass('inactive');
        }, logoutPhase1 - 120);
        setTimeout(function () {
          $app.hide();
          animating = false;
          $(that).removeClass('clicked');
        }, logoutPhase1);
      });
    });
  }


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
          setTimeout(() => {
            this.router.navigate(['index']);
          }, 1000);
        } else {
          this.message = 'Erro ao realizar o Login!';
        }
      },
      (error) => {
        this.message = 'Erro ao realizar o Login!';
      }
    );
  }
}

