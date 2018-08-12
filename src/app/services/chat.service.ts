import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Subject } from '../../../node_modules/rxjs';

@Injectable()
export class ChatService {

  private baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
  private baseURL1 = 'http://10.215.99.112:8008/api/v1';
  private baseUrl2 = 'http://localhost:8008';
  // 'http://bot-server-8-bot-server.dev.rdu2c.fabric8.io';
  private token: string = environment.token;

  constructor(private http: Http) { }

  public getResponse(query: string): Observable<any> {
    const data = {
      query: query,
      lang: 'en',
      Timestamp: new Date().getTime()
    };
    return this.http
      .post(`${this.baseUrl2}/api/v1/query`, data, { headers: this.getHeaders() })
      .map(res => {
        return res.json();
      });
    // const respData = new Subject<any>();
    // setTimeout(() => {
    //   respData.next({
    //     response: 'Hi, how are you ?',
    //     timestamp: 123456789
    //   });
    // });
    // return respData;
  }

  public getHeaders() {
    const headers = new Headers();
    headers.append('Authorization', `${this.token}`);
    return headers;
  }
}
