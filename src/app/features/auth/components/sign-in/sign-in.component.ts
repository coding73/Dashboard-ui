import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NotificationsConfigService } from '@app/config';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit{

  public changedColor: boolean = false;
  public hidePassword: boolean = true;
  protected signInForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService : LoginService,
    private notification: NotificationsConfigService
  ) {
    this.signInForm = this.newSignInFormGroup;
  }

  /**
   * Form builder to the sign in form
   */
  private get newSignInFormGroup(): FormGroup {
    return this.fb.group({
      email: ['',  [Validators.required, Validators.email]],
      password: [''],
    });
  }

  ngOnInit() {

    this.signInForm.get('email')!.valueChanges.subscribe(() => {
      const emailControl = this.signInForm.get('email');
      this.changedColor = emailControl?.valid ? true : false;
    });
  }

  /**
   * Method to login
   */
  login() {
    this.loginService.login(this.signInForm.value).subscribe(
        res => {
          localStorage.setItem('pk', res.data.token);
          localStorage.setItem('pf', JSON.stringify(res.data));
          this.router.navigate(['/app/home']);
          this.notification.showMessage(res.info);
        },
        err => this.addErrorHandler(err)
      );
  }

  /**
   * Add services error handler
   */
  private addErrorHandler(err: Error) {
    this.notification.showMessage('please give valid username and password');
  }

}
