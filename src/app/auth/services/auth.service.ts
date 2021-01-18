import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ApiService } from '../../shared/services/api.service';
import { IUserData } from '../../shared/models/user-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  private tokenStoreKey = 'token';
  private roleStoreKey = 'role';

  public isAdmin$ = new BehaviorSubject(false);

  constructor(protected injector: Injector) {
    super(injector);
  }

  login({ username, password }): Observable<IUserData> {
    return super.post<IUserData>('login', { email: username, password });
  }

  setToken(token): void {
    localStorage.setItem(this.tokenStoreKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenStoreKey);
  }

  hasToken(): boolean {
    return !!this.getToken();
  }

  setRole(role: string): void {
    this.isAdmin$.next(role === 'Admin');
    localStorage.setItem(this.roleStoreKey, role);
  }

  getRole(): string {
    return localStorage.getItem(this.roleStoreKey);
  }
}
