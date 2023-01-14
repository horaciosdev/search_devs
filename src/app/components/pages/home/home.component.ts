import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  term: string = '';

  constructor(private router: Router) {}

  search(term: string): void {
    this.term = term.trim();
    if (!this.term) {
      return;
    }
    this.router.navigate(['/perfil', this.term]);
  }
}
