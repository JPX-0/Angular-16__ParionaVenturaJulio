import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { SessionService } from 'src/app/core/services/auth/session.service';
import { StudentsService } from 'src/app/core/services/db/students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit, OnDestroy {

  private getAll(): Subscription {
    return this.dbService.getAll().subscribe({
      next: ({ response }) => this.elementData.data = response,
      error: ({ error }) => console.error("list-estudents.component - getAll - 17: ", error)
    });
  }

  // Variables para manejar la tabla
  elementData: any = new MatTableDataSource([]);
  adminColumns: string[] = ["N°", 'Estudiante', 'Correo', 'Edad', "Configuración"];
  genericColumns: string[] = ["N°", 'Estudiante', 'Correo', 'Edad'];

  // para desubscribir
  _getAll?: Subscription;
  _delete?: Subscription;

  constructor(
    private sesionService: SessionService,
    private dbService: StudentsService,
  ) {}
  
  ngOnInit(): void {
    this._getAll = this.getAll();
  }

  isAdmin(): Observable<boolean> {
    return this.sesionService.get("admin");
  }

  deleteUser(id: string): void {
    this._delete = this.dbService.delete(id).subscribe({
      next: () => {
        this._getAll?.unsubscribe();
        this._getAll = this.getAll();
      },
      error: ({ error }) => console.error("list-estudents.component - delete - 49: ", error),
      complete: () => this._delete?.unsubscribe()
    })
    
  }

  ngOnDestroy(): void {
    if(this._getAll) this._getAll.unsubscribe();
  }

}
