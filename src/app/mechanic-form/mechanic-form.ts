import { Component, OnInit } from '@angular/core';
import { Mechanic } from '../mechanic';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mechanic-form',
  imports: [FormsModule],
  templateUrl: './mechanic-form.html',
  styleUrl: './mechanic-form.css',
})
export class MechanicForm implements OnInit {
  username: string = '';
  name: string = '';
  password: string = '';
  isEditMode: boolean = false;

  constructor(
    private mechanicService: Mechanic,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.mechanicService.getMechanicById(id).subscribe({
        next: (response: any) => {
          this.name = response.name;
          this.username = response.username;
        },
        error: (err) => {
          console.error('Erroare incarcare mechanic details', err);
        },
      });
    }
  }

  saveMechanic() {
    const newMechanic = {
      username: this.username,
      name: this.name,
    };

    if (this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id')!;
      this.mechanicService.updateMechanic(id, newMechanic).subscribe({
        next: (response) => {
          this.router.navigate(['/mechanics', id]);
        },
        error: (error) => {
          console.error('eroare la update MEchanic:', error);
        },
      });
    } else {
      const mechanicToCreate = {
        username: this.username,
        name: this.name,
        password: this.password,
      };
      this.mechanicService.createMechanic(mechanicToCreate).subscribe({
        next: (response) => {
          this.router.navigate(['/mechanics']);
        },
        error: (error) => {
          console.error('Error creating mechanic:', error);
        },
      });
    }
  }
}
