import { Component, Input } from '@angular/core';
import { DateCalculatorService } from 'src/app/services/date-calculator.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent {
  @Input() term: string = '';
  repos: any[] = [];
  errorMessage: string = '';

  constructor(
    private profileService: ProfileService,
    private dateCalculatorService: DateCalculatorService
  ) {}

  ngOnInit(): void {
    this.getRepos(this.term);
  }

  ngOnChanges(): void {
    this.getRepos(this.term);
  }

  getRepos(term: string): void {
    this.profileService.getGitHubRepos(term).subscribe(
      (data) => {
        if (data.length) {
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
        console.log(error);
        if (error.message) {
          this.errorMessage = error.message;
        }
      }
    );
  }

  calculateDateDiff(dateSent: Date) {
    return this.dateCalculatorService.calculateDateDiff(dateSent);
  }
}
