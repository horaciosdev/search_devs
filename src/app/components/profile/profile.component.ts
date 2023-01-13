import { Component, Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() term: string = '';
  profile: any = '';
  errorMessage: string = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    if (this.term) {
      this.getProfile(this.term);
    }
  }

  ngOnChanges(): void {
    this.getProfile(this.term);
  }

  getProfile(term: string): void {
    this.profileService.getGitHubProfile(term).subscribe(
      (data) => {
        if (data.id) {
          this.profile = data;
        } else {
          if (data.message) {
            switch (data.message) {
              case 'Not Found':
                this.errorMessage = 'Perfil não encontrado.';
                break;
              default:
                this.errorMessage = data.message;
            }
          }
        }
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.errorMessage = error.message;
        }
      }
    );
  }
}
