import { TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';

describe('SessionService', () => {
  let service: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ SessionService ]
    });
    service = TestBed.inject(SessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('when logged in as "invitado"', (done: DoneFn) => {
    service.test().subscribe(accountData => {
      expect(accountData).toEqual({
        account: "invitado",
        authentication: false,
        admin: false
      });
      done();
    })
  });
  it('when logged in as "estudiante"', (done: DoneFn) => {
    service.signup({
      firstName: "userTest1",
      lastName: "userTest1",
      image: "",
      email: "user.test1@gmail.com",
      age: 18
    })
    service.confirm("authentication");
    service.reject("admin");
    service.test().subscribe(accountData => {
      expect(accountData).toEqual({
        account: {
          firstName: "userTest1",
          lastName: "userTest1",
          image: "",
          email: "user.test1@gmail.com",
          age: 18
        },
        authentication: true,
        admin: false
      });
      done();
    })
  });
  it('when logged in as "admin"', (done: DoneFn) => {
    service.signup("admin")
    service.confirm("authentication");
    service.confirm("admin");
    service.test().subscribe(accountData => {
      expect(accountData).toEqual({
        account: "admin",
        authentication: true,
        admin: true
      });
      done();
    })
  });
  it('when the session is logout it should be registered as "invitado"', (done: DoneFn) => {
    service.logout();
    service.test().subscribe(accountData => {
      expect(accountData).toEqual({
        account: "invitado",
        authentication: false,
        admin: false
      });
      done();
    })
  });
});
