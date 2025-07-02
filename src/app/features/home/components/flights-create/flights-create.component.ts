import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FlightService } from '../../services/flight.service';
import { Router } from '@angular/router';
import { NotificationsConfigService } from '@app/config';

@Component({
  selector: 'app-flights-create',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,],
  providers: [DatePipe],
  templateUrl: './flights-create.component.html',
  styleUrl: './flights-create.component.scss'
})
export class FlightsCreateComponent {
protected flightForm: FormGroup;
  flightDetails: any;

  constructor(private fb: FormBuilder,
    private datePipe: DatePipe,
    private flightService: FlightService,
    private notification: NotificationsConfigService,
    private router: Router
  ) {
    this.flightForm = this.newSignInFormGroup;
  }

  /**
   * Form builder to the sign in form
   */
  private get newSignInFormGroup(): FormGroup {
    return this.fb.group({
      flightName: ['', Validators.required],
      flightDate: ['', Validators.required],
      duration:   ['', Validators.required],
      pilotName:  ['', Validators.required],
      location:   ['', Validators.required]
    });
  }

   /**
  * Get for from date filed
  */
  get flightDateField(): AbstractControl {
    return this.flightForm.get('flightDate') as AbstractControl;
  }

  onSubmit() {
    this.flightDetails = this.flightForm?.value
    let flightStartDt = this.datePipe.transform(this.flightDateField.value, 'yyyy-MM-dd')
    this.flightDetails.flightDate = flightStartDt;

    this.flightService.createFlight(this.flightDetails)
    .subscribe(
        res => {
          this.notification.showMessage(res.info);
          if (res.code = 201) {
            this.router.navigate(['/app/home']);
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

