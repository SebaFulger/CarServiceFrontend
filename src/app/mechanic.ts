import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mechanic {
  private apiUrl = 'http://localhost:8080/mechanics';

  constructor(private http: HttpClient) {}

  getAllMechanics() {
    return this.http.get(this.apiUrl);
  }

  getMechanicById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createMechanic(mechanic: any) {
    return this.http.post(this.apiUrl, mechanic);
  }

  updateMechanic(id: string, mechanic: any) {
    return this.http.put(`${this.apiUrl}/${id}`, mechanic);
  }

  deleteMechanic(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
