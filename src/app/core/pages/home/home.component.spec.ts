import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ResolveUserPipe } from '../../pipes/resolve-user.pipe';

import { SessionService } from '../../services/auth/session.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, ResolveUserPipe ],
      providers: [ SessionService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('when not logged should render "Bienvenido, usted está ingresando como Invitado"', () => {
    expect(compiled.querySelector('p')?.textContent).toContain('Bienvenido, usted está ingresando como Invitado');
  });
  it('should login as a "admin" should render "Bienvenido, admin', (done: DoneFn) => {
    (component as any).service.signup("admin");
    done();
    fixture.detectChanges();
    expect(compiled.querySelector('p')?.textContent).toContain('Bienvenido, admin');
  });
  it('should login as a "estudiante" should render "Bienvenido, userTest1 userTest1"', (done: DoneFn) => {
    (component as any).service.signup({
      firstName: "userTest1",
      lastName: "userTest1",
      image: "",
      email: "user.test1@gmail.com",
      age: 18
    });
    done();
    fixture.detectChanges();
    expect(compiled.querySelector('p')?.textContent).toContain('Bienvenido, userTest1 userTest1');
  });
});
