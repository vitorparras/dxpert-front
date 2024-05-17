export interface UserResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    permissao: number;
  };
}

export interface IUsuario {
  id?: string | undefined | null;
  Email: string | undefined;
  Senha: string | undefined;
}

export interface IUserData {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  permissao: number;
  senhaConfirm: string;
  senha: string;
}
