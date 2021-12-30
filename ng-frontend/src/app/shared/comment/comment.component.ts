import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/http.service';

@Component({
  selector: 'shared-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit, OnDestroy {
  @Input() tokenData!: any;
  @Input() _id!: any;

  userSub: Subscription = new Subscription();
  userData: any;

  commentForm!: FormGroup;
  CREATE_COMMENT_URL = 'comment';

  constructor(private apiService: ApiService, private toast: ToastrService) {}

  ngOnInit() {
    this.commentForm = new FormGroup({
      content: new FormControl(null, [
        Validators.required,
        Validators.min(5),
        Validators.max(500),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.min(5),
        Validators.max(200),
        Validators.email,
      ]),
    });

    console.log(this.tokenData);

    if (this.tokenData && this.tokenData.email)
      this.commentForm.setValue({
        content: '',
        email: this.tokenData.email,
      });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const commentData = {
        parentId: this._id,
        isReplyed: 'false',
        username: this.tokenData.username,
        userId: this.tokenData._id,
        profile: this.tokenData.profile,
        content: this.commentForm.value.content,
      };

      console.log(commentData);
      if (this.tokenData) {
        this.apiService.post('comment', commentData).subscribe(
          (data) => {
            this.toast.success('دیدگاه شما با موفقیت ثبت شد و منتظر تایید است');
            this.commentForm.reset();
          },
          (error) => {
            this.toast.error('مشکلی رخ داد. لطفا مجددا امتحان کنید');
          }
        );
      }
    }
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
