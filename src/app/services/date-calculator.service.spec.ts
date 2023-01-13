import { TestBed } from '@angular/core/testing';

import { DateCalculatorService } from './date-calculator.service';

describe('DateCalculatorService', () => {
  let service: DateCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
