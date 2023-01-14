import { Component, Input, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateCalculatorService } from 'src/app/services/date-calculator.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent {
  @Input() term: string = '';
  loading: boolean = false;
  repos: any[] = [];
  errorMessage: string = '';
  private requestSubscription: Subscription | undefined;

  constructor(
    private profileService: ProfileService,
    private dateCalculatorService: DateCalculatorService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loading = true;
    this.repos = [];
    this.cancelRequest();
    this.getRepos(this.term);
  }

  getRepos(term: string): void {
    this.requestSubscription = this.profileService
      .getGitHubRepos(term)
      .subscribe(
        (data) => {
          this.loading = false;
          this.repos = data;
          if (this.repos.length) {
            this.repos = data.sort(
              (a: any, b: any) => b.stargazers_count - a.stargazers_count
            );
          } else {
            if (data.message) {
              switch (data.message) {
                case 'Not Found':
                  this.errorMessage = 'Repositórios não encontrados.';
                  break;
                default:
                  this.errorMessage = data.message;
              }
            }
          }
        },
        (error) => {
          this.loading = false;
          if (error.message) {
            this.errorMessage = error.message;
          }
        }
      );
  }

  calculateDateDiff(dateSent: Date) {
    return this.dateCalculatorService.calculateDateDiff(dateSent);
  }

  cancelRequest(): void {
    if (this.requestSubscription) {
      this.requestSubscription.unsubscribe();
    }
  }
}
