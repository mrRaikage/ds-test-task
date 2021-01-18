import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { Observable } from 'rxjs';
import { IListOfUsers } from '../models/users-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends ApiService{

  constructor(protected injector: Injector) {
    super(injector);
  }

  getListOfUsers(): Observable<IListOfUsers> {
    return super.get<IListOfUsers>('users');
  }
}
