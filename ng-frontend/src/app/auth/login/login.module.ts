import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/http.service';
import { TimeService } from 'src/app/services/time.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule],
  // providers: [ApiService, TimeService, CookieService]
  declarations: [LoginComponent],
})
export class LoginModule {}
