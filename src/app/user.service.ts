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

  loadUser(): User {
    console.log('Before delay');
    this.delay(2000);
    console.log('Sending user');
    return fakeData;
  }

  async delay(ms: number) {
    await new Promise((resolve) => setTimeout(() => resolve(123), ms)).then(
      () => console.log('fired')
    );
  }

  sleep(ms: number) {
    setTimeout(() => {}, ms);
  }
}
