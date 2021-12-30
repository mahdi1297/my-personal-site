import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/http.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'shared-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit, OnDestroy {
  @Input() tokenData!: any;

  userSub: Subscription = new Subscription();
  userData: any;

  commentForm!: FormGroup;
  CREATE_COMMENT_URL = 'comment';

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
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
      this.commentForm.patchValue({
        email: this.tokenData.email,
      });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const commentData = {
        parentId: '_',
        isReplyed: 'false',
        username: this.tokenData.username,
        userId: this.tokenData._id,
        profile: this.tokenData.profile,
        content: this.commentForm.value.content,
      };

      console.log(commentData);
      this.apiService.post('comment', commentData).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
