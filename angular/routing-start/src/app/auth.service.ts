import {reject} from "q";

export class AuthService {
  logedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.logedIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.logedIn = true;
  }

  logout() {
    this.logedIn = false;
  }
}
