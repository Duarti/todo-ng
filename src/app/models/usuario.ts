export class Usuario {
  id: number;
  usuario: string;
  senha: string;
  token: string;

  setUserToken(token: string) {
    this.token = token;
    localStorage.setItem('USER_TOKEN', token);
  }

  getUserToken(): string {
    return localStorage.getItem('USER_TOKEN');
  }
}
