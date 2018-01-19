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
    if (this.isTokenOk()) {
      return this.token;
    }
    this.token = localStorage.getItem('USER_TOKEN');
    return this.token;
  }

  private isTokenOk() {
    if (this.token === null || this.token === undefined) {
      return false;
    }
    return true;
  }
}
