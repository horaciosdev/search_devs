import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profile: any = '';
  repos: any[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    const term = this.activatedRoute.snapshot.paramMap.get('term');
    if (term) {
      this.getProfile(term);
      this.getRepos(term);
    }
  }

  search(term: string): void {
    this.router.navigate(['/profile', term]);
    this.getProfile(term);
    this.getRepos(term);
  }

  getProfile(term: string): void {
    this.profileService.getGitHubProfile(term).subscribe((data) => {
      this.profile = data;
    });
  }

  getRepos(term: string): void {
    this.profileService.getGitHubRepos(term).subscribe((data) => {
      this.repos = data.sort(
        (a: any, b: any) => b.stargazers_count - a.stargazers_count
      );
    });
  }
}
