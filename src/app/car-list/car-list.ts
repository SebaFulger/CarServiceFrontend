import { Component, OnInit, signal } from '@angular/core';
import { Car } from '../car';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-list',
  imports: [RouterLink],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarList implements OnInit {
  cars = signal<any[]>([]);

  constructor(private carService: Car) {}

  ngOnInit() {
    this.carService.getAllCars().subscribe({
      next: (response: any) => {
        this.cars.set(response);
      },
      error: (err) => {
        console.error('Eroare la incarcarea cars:', err);
      },
    });
  }
}
