import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurent } from './add-resto/resto.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RestoService {
  url = 'https://my-json-server.typicode.com/EfficaciousDevs/demo/restaurants';
  regURL = 'https://my-json-server.typicode.com/EfficaciousDevs/demo/users';
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get(this.url);
  }
  saveResto(data: Restaurent): Observable<any> {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/Json');
    let options = { headers: httpHeaders };
    return this.http.post(this.url, data, options);
  }
  deleteResto(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getCurrentResto(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateResto(id, data) {
    return this.http.put(`${this.url}/${id}`, data);
  }
  registerUser(data) {
    return this.http.post(this.regURL, data);
  }
  loginUser(email: string, password: string) {
    return this.http.post(this.regURL, {
      email: email,
      password: password,
    });
  }
  getResto(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
