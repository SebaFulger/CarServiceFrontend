import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getServiceRecordById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createServiceRecord(serviceRecord: any) {
    return this.http.post(this.apiUrl, serviceRecord);
  }

  updateServiceRecord(id: string, serviceRecord: any) {
    return this.http.put(`${this.apiUrl}/${id}`, serviceRecord);
  }

  deleteServiceRecord(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
