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
        console.log('Masina a fost stearsa cu succes.');
        this.router.navigate(['/cars']); // Navigheaza inapoi la lista de masini dupa stergere
      },
      error: (err) => {
        console.error('Eroare la stergerea masinii:', err);
      },
    });
  }
}
