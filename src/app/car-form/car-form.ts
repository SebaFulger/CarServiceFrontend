import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  imports: [FormsModule],
  templateUrl: './car-form.html',
  styleUrl: './car-form.css',
})
export class CarForm implements OnInit {
  brand: string = '';
  model: string = '';
  year: number = 0;
  licensePlate: string = '';
  owner: string = '';
  ownerPhone: string = '';

  constructor(
    private carService: Car,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carService.getCarById(id).subscribe({
        next: (response: any) => {
          this.brand = response.brand;
          this.model = response.model;
          this.year = response.year;
          this.licensePlate = response.licensePlate;
          this.owner = response.owner;
          this.ownerPhone = response.ownerPhone;
        },
        error: (err) => {
          console.error('Error loading car details:', err);
        },
      });
    }
  }
  saveCar() {
    const newCar = {
      brand: this.brand,
      model: this.model,
      year: this.year,
      licensePlate: this.licensePlate,
      owner: this.owner,
      ownerPhone: this.ownerPhone,
    };

    if (this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id')!;
      this.carService.updateCar(id, newCar).subscribe({
        next: (response) => {
          this.router.navigate(['/cars', id]);
        },
        error: (error) => {
          console.error('Error updating car:', error);
        },
      });
    } else {
      this.carService.createCar(newCar).subscribe({
        next: (response) => {
          this.router.navigate(['/cars']);
        },
        error: (error) => {
          console.error('Error creating car:', error);
        },
      });
    }
  }
}
