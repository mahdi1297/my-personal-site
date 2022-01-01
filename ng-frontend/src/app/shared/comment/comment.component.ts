import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
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
  @Input() isReplyed!: any;
  @Input() replyedParentId!: any;
  @Output() close: EventEmitter<any> = new EventEmitter();

  userSub: Subscription = new Subscription();
  userData: any;

  commentForm!: FormGroup;
  CREATE_COMMENT_URL = 'comment';

  constructor(private apiService: ApiService, private toast: ToastrService) {}

  ngOnInit() {
    // console.log(this.tokenData); //  undefined
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
        isReplyed: this.isReplyed ? 'true' : 'false',
        username: this.tokenData.username,
        userId: this.tokenData._id,
        profile: this.tokenData.profile,
        content: this.commentForm.value.content,
        replyedParentId: this.replyedParentId ? this.replyedParentId : '_',
      };

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

  closeModal() {
    console.log('x');
    this.close.emit(null);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
