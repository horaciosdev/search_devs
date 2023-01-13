import { Component, ElementRef, Input } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';
import { Icon } from 'src/app/interfaces/icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() iconName: string = '';
  icon!: Icon;

  constructor(
    private iconService: IconService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.getIcon();
  }

  ngAfterViewInit() {
    var svg = this.elementRef.nativeElement.querySelector('.icon');
    svg.insertAdjacentHTML('beforeend', this.icon.svg);
  }

  getIcon(): void {
    this.iconService
      .getIcon(this.iconName)
      .subscribe((icon) => (this.icon = icon));
  }
}
