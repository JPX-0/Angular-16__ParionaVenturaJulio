import { TestBed } from '@angular/core/testing';
import { SessionService } from '../services/auth/session.service';

import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ SessionService ]
    });
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should not get into when logged in as "invitado"', (done: DoneFn) => {
    (guard as any).canActivate().subscribe((admin: boolean) => {
      expect(admin).toBeFalse();
      done();
    })
  });
  it('should not get into when logged in as "estudiante"', (done: DoneFn) => {
    (guard as any).sesionService.reject("admin");
    (guard as any).canActivate().subscribe((admin: boolean) => {
      expect(admin).toBeFalse();
      done();
    })
  });
  it('should get into when logged in as "admin"', (done: DoneFn) => {
    (guard as any).sesionService.confirm("admin");
    (guard as any).canActivate().subscribe((admin: boolean) => {
      expect(admin).toBeTrue();
      done();
    })
  });
});
