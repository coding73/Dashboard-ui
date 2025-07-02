import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NotificationsConfigService } from '@app/config';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signupForm: FormGroup;

  constructor (
        private fb: FormBuilder,
        private router: Router,
        private loginService : LoginService,
        private notification: NotificationsConfigService
  ) {
    this.signupForm = this.newSignupForm
  }

  /**
   * signup
   */
  private get newSignupForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    let payload = this.signupForm.value
    this.loginService.signup(payload).subscribe(
        res => {
          this.notification.showMessage(res.info);
          if (res.code = 201) {
            this.router.navigate(['/auth/login']);
          }

        },
        err => this.addErrorHandler(err)
      );
  }

  /**
   * Add services error handler
   */
  private addErrorHandler(err: any) {
    this.notification.showMessage(err);
  }

}
