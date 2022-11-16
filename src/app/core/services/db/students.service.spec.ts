import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { StudentsService } from './students.service';

describe('StudentsService', () => {
  let service: StudentsService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new StudentsService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return the data', (done: DoneFn) => {
    const mockData = [
      {
        "_id": "636db1cdeda73f2c00bf4876",
        "info": {
          "firstName": "firstName1",
          "lastName": "lastName1",
          "age": 18,
          "image": "",
          "email": "email1@gmail.com"
        },
        "data": {
          "status": "cursando",
          "commission": 1,
          "courses": [""]
        }
      }
    ]
    httpClientSpy.get.and.returnValue(of(mockData));
    service.getAll().subscribe((data: any) => {
      expect(data).toEqual(mockData);
      done();
    })
  });

  // No logré realizar los metodos POST, PUT y DELETE, ya que solo esta la funcion [get] en el httpClientSpy

});
