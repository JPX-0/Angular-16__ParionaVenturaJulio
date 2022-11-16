import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/core/services/auth/session.service';
import { ShowMenuService } from '../../services/show-menu.service';
import { Observable } from "rxjs"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu!: ShowMenuService;

  constructor(
    private mwenuService: ShowMenuService,
    private sesionService: SessionService,
  ) {}

  ngOnInit(): void {
    this.menu = this.mwenuService;
  }

  auth(): Observable<boolean> {
    return this.sesionService.get("authentication")
  }

  logout(): void {
    this.menu.toggle();
    this.sesionService.logout();
  }

}
