import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmited: boolean = false;
  isLoading: boolean = false;
  LOGIN_API_ADDRESS: string = 'user/login';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    if (this.form.valid) {
      this.isSubmited = true;
      this.isLoading = true;

      let userData = {
        email: this.form.value.email,
        password: this.form.value.password,
      };

      this.apiService.post(this.LOGIN_API_ADDRESS, userData).subscribe(
        (data: any) => {
          console.log(data.result);
          if (data && data.status === 200) {
            this.cookieService.set('u_t', data.result, 100000);
            this.router.navigate(['/']);
          }
        },
        (error) => {
          console.log(error);
        }
      );
      this.isLoading = false;
    }
  }
}
