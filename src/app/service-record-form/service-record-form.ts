import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceRecord } from '../service-record';
import { Car } from '../car';
import { Mechanic } from '../mechanic';

@Component({
  selector: 'app-service-record-form',
  imports: [FormsModule],
  templateUrl: './service-record-form.html',
  styleUrl: './service-record-form.css',
})
export class ServiceRecordForm implements OnInit {
  description: string = '';
  serviceDate: string = '';
  km: number = 0;
  cost: number = 0;
  carId: string = '';
  mechanicId: string = '';
  isEditMode: boolean = false;

  cars = signal<any[]>([]);
  mechanics = signal<any[]>([]);

  constructor(
    private serviceRecordService: ServiceRecord,
    private carService: Car,
    private mechanicService: Mechanic,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.carService.getAllCars().subscribe({
      next: (response: any) => {
        this.cars.set(response);
      },
      error: (err) => {
        console.error('Eroare la incarcarea masinilor:', err);
      },
    });

    this.mechanicService.getAllMechanics().subscribe({
      next: (response: any) => {
        this.mechanics.set(response);
      },
      error: (err) => {
        console.error('Eroare la incarcarea mecanicilor:', err);
      },
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.serviceRecordService.getServiceRecordById(id).subscribe({
        next: (response: any) => {
          this.description = response.description;
          this.serviceDate = response.serviceDate;
          this.km = response.km;
          this.cost = response.cost;
          this.carId = response.carId;
          this.mechanicId = response.mechanicId;
        },
        error: (err) => {
          console.error('Eroare la incarcarea inregistrarii:', err);
        },
      });
    }
  }

  saveServiceRecord() {
    const record = {
      description: this.description,
      serviceDate: this.serviceDate,
      km: this.km,
      cost: this.cost,
      carId: this.carId,
      mechanicId: this.mechanicId,
    };

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.serviceRecordService.updateServiceRecord(id, record).subscribe({
        next: () => {
          this.router.navigate(['/cars', this.carId]);
        },
        error: (err) => {
          console.error('Eroare la actualizarea inregistrarii:', err);
        },
      });
    } else {
      this.serviceRecordService.createServiceRecord(record).subscribe({
        next: () => {
          this.router.navigate(['/cars', this.carId]);
        },
        error: (err) => {
          console.error('Eroare la crearea inregistrarii:', err);
        },
      });
    }
  }
}
