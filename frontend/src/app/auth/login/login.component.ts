import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/http.service';

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
    private cookieService: CookieService,
    private toast: ToastrService
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
          if (data && data.status === 200) {
            this.cookieService.set('u_t', data.result, 100000, '/');
            if (this.cookieService.check('u_t')) {
              this.toast.success(
                'بعد از 5 ثانیه به خانه منتقل میشوید',
                'ورود موفق'
              );
              setTimeout(() => {
                window.location.href = '/';
              }, 5000);
            } else {
              this.toast.error('لطفا مججدا امتحان کنید', 'خطا');
            }
          }
        },
        (error) => {
          this.toast.error('لطفا مججدا امتحان کنید', 'خطا');
        }
      );
      this.isLoading = false;
    }
  }
}
