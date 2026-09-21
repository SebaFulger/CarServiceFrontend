import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Car } from '../car';
import { ServiceRecord } from '../service-record';

@Component({
  selector: 'app-car-detail',
  imports: [RouterLink],
  templateUrl: './car-detail.html',
  styleUrl: './car-detail.css',
})
export class CarDetail implements OnInit {
  car = signal<any>(null);
  serviceRecords = signal<any[]>([]);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: Car,
    private serviceRecordService: ServiceRecord,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carService.getCarById(id).subscribe({
        next: (response: any) => {
          this.car.set(response);
        },
        error: (err) => {
          console.error('Eroare la incarcarea detaliilor masinii:', err);
        },
      });
      this.serviceRecordService.getByCarId(id).subscribe({
        next: (response: any) => {
          this.serviceRecords.set(response);
        },
        error: (err) => {
          console.error('Eroare la incarcarea istoricului de service:', err);
        },
      });
    }
  }

  deleteCar(id: string) {
    if (!confirm('Are you sure you want to delete this car?')) {
      return;
    }
    this.carService.deleteCar(id).subscribe({
      next: () => {
        this.router.navigate(['/cars']);
      },
      error: (err) => {
        console.error('Eroare la stergerea masinii:', err);
      },
    });
  }

  deleteServiceRecord(recordId: string) {
    if (!confirm('Are you sure you want to delete this service record?')) {
      return;
    }
    this.serviceRecordService.deleteServiceRecord(recordId).subscribe({
      next: () => {
        this.serviceRecords.update((current) =>
          current.filter((record) => record.id !== +recordId),
        );
      },
      error: (err) => {
        console.error('Eroare la stergerea inregistrarii:', err);
      },
    });
  }
}
