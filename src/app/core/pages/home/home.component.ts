import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AccountType } from '../../models/session.model';
import { SessionService } from '../../services/auth/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: SessionService
  ) { }

  ngOnInit(): void {}

  user(): Observable<AccountType | "invitado"> {
    return this.service.account();
  }

}
