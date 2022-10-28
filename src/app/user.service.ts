import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  name: string;
}

const fakeData = {
  name: 'Rick',
};

@Injectable()
export class UserService {
  constructor() {}

  loadUser() {
    return of<User>(fakeData).pipe(delay(2000));
  }
}
