import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AccountType, SessionInterface, SessionType } from '../../models/session.model';

@Injectable()
export class SessionService {

  private data$!: BehaviorSubject<SessionInterface>;

  private data: SessionInterface = {
    account: "invitado",
    authentication: false,
    admin: false
  }

  constructor() {
    this.data$ = new BehaviorSubject<SessionInterface>(this.data);
  }

  // Objeto usado únicamente para la ejecución del test
  test(): Observable<SessionInterface> {
    return this.data$
  }

  account(): Observable<AccountType | "invitado"> {
    return this.data$.asObservable().pipe(map(e => e.account));
  }
  get(type: SessionType): Observable<boolean> {
    return this.data$.asObservable().pipe(map(e => e[type]));
  };
  confirm(type: SessionType): void {
    this.data[type] = true;
    this.data$.next(this.data);
  };
  reject(type: SessionType): void {
    this.data[type] = false;
    this.data$.next(this.data);
  }
  signup(account: AccountType): void {
    this.data.account = account;
    this.data$.next(this.data);
  }
  logout(): void {
    this.data = {
      account: "invitado",
      authentication: false,
      admin: false
    }
    this.data$.next(this.data);
  }

}
