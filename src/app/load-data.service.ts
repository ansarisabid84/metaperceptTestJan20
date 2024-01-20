import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {

  constructor(private httpClient: HttpClient) { }

  readFile(filePath: string) {
    return this.httpClient.get(filePath);
  }
}
