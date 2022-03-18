import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmited: boolean = false;
  isLoading: boolean = false;
  REGISTER_API_ADDRESS: string = 'user/';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private cookieService: CookieService,
    private toast: ToastrService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.email],
      username: ['', Validators.required],
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
        username: this.form.value.username,
        password: this.form.value.password,
      };

      this.apiService.post(this.REGISTER_API_ADDRESS, userData).subscribe(
        (data: any) => {
          if (data && data.status === 200) {
            this.cookieService.set('u_t', data.result, 100000, '/');
            if (this.cookieService.check('u_t')) {
              this.toast.success(
                'بعد از 3 ثانیه به صفحه ورود منتقل میشوید',
                'ثبت نام موفق'
              );
              setTimeout(() => {
                window.location.href = '/auth/login';
              }, 3000);
            }
          }
        },
        (error) => {
          console.log(error);
          this.toast.error(
            'خطا',
            error.message || 'نام کاربری یا ایمیل تکراریست'
          );
        }
      );
      this.isLoading = false;
    }
  }
}
