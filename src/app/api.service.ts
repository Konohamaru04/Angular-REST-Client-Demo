import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY_user = 'https://api.github.com/users/';
  API_KEY_repos = 'https://api.github.com/users/';

  constructor(private httpClient: HttpClient) { }

  public getData(username: string)
  {
    return this.httpClient.get(this.API_KEY_user+username);
  }

  public getRepos(username: string)
  {
    return this.httpClient.get(this.API_KEY_user+username+'/repos');
  }
}
