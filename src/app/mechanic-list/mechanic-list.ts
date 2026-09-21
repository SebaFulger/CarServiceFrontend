import { Component, OnInit, signal } from '@angular/core';
import { Mechanic } from '../mechanic';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mechanic-list',
  imports: [RouterLink],
  templateUrl: './mechanic-list.html',
  styleUrl: './mechanic-list.css',
})
export class MechanicList implements OnInit {
  mechanics = signal<any[]>([]);

  constructor(private mechanicService: Mechanic) {}

  ngOnInit() {
    this.mechanicService.getAllMechanics().subscribe({
      next: (response: any) => {
        this.mechanics.set(response);
      },
      error: (err) => {
        console.error('Erroare la incarcare mechanici', err);
      },
    });
  }

  deleteMechanic(id: string) {
    if (!confirm('Are you sure you want to delete this mechanic?')) {
      return;
    }
    this.mechanicService.deleteMechanic(id).subscribe({
      next: () => {
        this.mechanics.update((current) => current.filter((mechanic) => mechanic.id !== +id));
      },
      error: (err) => {
        console.error('Eroare la stergerea mecanicului:', err);
      },
    });
  }
}
