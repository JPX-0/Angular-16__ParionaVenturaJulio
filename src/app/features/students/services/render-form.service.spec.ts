import { TestBed } from '@angular/core/testing';

import { RenderFormService } from './render-form.service';

xdescribe('RenderFormService', () => {
  let service: RenderFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
