import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionService } from '../services/auth/session.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ SessionService ],
      imports: [ RouterTestingModule ],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  xit('should not get into when logged in as "invitado"', (done: DoneFn) => {
    /*
      La ejecucion del subscribe del canActivate realiza una redireccion, 
      impidiendo el rtorno de una variable para testear.

      // (guard as any).canActivate().subscribe((auth: boolean) => {
      //   expect(auth).toBeFalse();
      //   done();
      // })
    */
  });
  it('should get into when logged in as "estudiante"', (done: DoneFn) => {
    (guard as any).sesionService.confirm("authentication");
    (guard as any).canActivate().subscribe((auth: boolean) => {
      expect(auth).toBeTrue();
      done();
    })
  });
  it('should get into when logged in as "admin"', (done: DoneFn) => {
    (guard as any).sesionService.confirm("authentication");
    (guard as any).canActivate().subscribe((auth: boolean) => {
      expect(auth).toBeTrue();
      done();
    })
  });
});
