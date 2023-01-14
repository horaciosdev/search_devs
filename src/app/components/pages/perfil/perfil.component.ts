import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent {
  profile: any = '';
  repos: any[] = [];
  term: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.term = this.activatedRoute.snapshot.paramMap.get('term') || '';
  }

  search(term: string): void {
    this.term = term.trim();
    if (!this.term) {
      return;
    }
    this.router.navigate(['/perfil', this.term]);
  }
}
