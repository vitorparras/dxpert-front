export interface ApiResponse {
  data: any[]; // ajuste o tipo de 'data' conforme a estrutura real dos seus dados
  message: string;
  success: boolean;
}
