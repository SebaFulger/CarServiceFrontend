import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceRecord {
  private apiUrl = 'http://localhost:8080/service-records';

  constructor(private http: HttpClient) {}

  getAllServiceRecords() {
    return this.http.get(this.apiUrl);
  }

  getByCarId(carId: string) {
    return this.http.get(`${this.apiUrl}/by-car/${carId}`);
  }
}
