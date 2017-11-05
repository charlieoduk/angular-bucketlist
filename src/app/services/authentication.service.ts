import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  private baseUrl = 'http://localhost:8080/api/v1';
  constructor(private http: Http) { }

  login(email: string, password: string)  {
    let headers = new Headers({ 'Content-Type': 'appication/json' });

    let body = ({ email: email, password: password });
    const options = new RequestOptions({
      headers: headers,
      // body: body
    });
    return this.http.post(`${this.baseUrl}/auth/login`, body, options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        console.log(response);
        const user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
