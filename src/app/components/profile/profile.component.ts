import { Component, Input, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() term: string = '';
  loading: boolean = false;
  profile: any = '';
  errorMessage: string = '';
  private requestSubscription: Subscription | undefined;

  constructor(private profileService: ProfileService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loading = true;
    this.profile = '';
    this.cancelRequest();
    this.getProfile(this.term);
  }

  getProfile(term: string): void {
    this.requestSubscription = this.profileService
      .getGitHubProfile(term)
      .subscribe(
        (data) => {
          this.loading = false;
          this.profile = data;
        },
        (error) => {
          this.loading = false;
          if (error.error.message) {
            switch (error.error.message) {
              case 'Not Found':
                this.errorMessage = 'Perfil não encontrado.';
                break;
              default:
                this.errorMessage = error.error.message;
            }
          } else {
            if (error.message) {
              this.errorMessage = error.message;
            }
          }
        }
      );
  }

  cancelRequest(): void {
    if (this.requestSubscription) {
      this.requestSubscription.unsubscribe();
    }
  }
}
