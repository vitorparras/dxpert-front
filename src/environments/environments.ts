export const Environment = {
  production: false
};
export class ApiUrls {
  public static Base = 'https://localhost:7133/api';
  public static configuracao = `${ApiUrls.Base}/Configuracao`;
  public static Auth = `${ApiUrls.Base}/Auth`;
  public static Usuario = `${ApiUrls.Base}/Usuario`;
  public static Cadastro = `${ApiUrls.Base}/Cadastro`;
  public static Relatorio = `${ApiUrls.Base}/Relatorio`;
}
