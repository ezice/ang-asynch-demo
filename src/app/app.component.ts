import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { UserService, User } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;
  user: Observable<User>;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });

    this.user = this.userService.loadUser().pipe(
      tap((user) => {
        console.log('received user');
        this.form.patchValue(user);
      })
    );
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
