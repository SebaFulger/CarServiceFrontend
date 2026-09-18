import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Car {
  private apiUrl = 'http://localhost:8080/cars';

  constructor(private http: HttpClient) {}

  getAllCars() {
    return this.http.get(this.apiUrl);
  }

  getCarById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createCar(car: any) {
    return this.http.post(this.apiUrl, car);
  }

  updateCar(id: string, car: any) {
    return this.http.put(`${this.apiUrl}/${id}`, car);
  }

  deleteCar(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
