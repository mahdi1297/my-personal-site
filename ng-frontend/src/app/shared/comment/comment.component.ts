import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/http.service';

@Component({
  selector: 'shared-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit, OnDestroy {
  userSub: Subscription = new Subscription();
  userData: any;

  commentForm!: FormGroup;
  CREATE_COMMENT_URL = 'comment';

  constructor() {}

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
      password: new FormControl(null, [
        Validators.required,
        Validators.min(5),
        Validators.max(100),
      ]),
    });
  }

  // ngOnInit() {

  // }

  onSubmit() {
    if (this.commentForm.valid) {
      console.log(this.userData);

      // const commentData = {
      //   parentId: dataObj.parentId,
      //   isReplyed: dataObj.isReplyed,
      //   username: dataObj.username,
      //   userId: dataObj.userId,
      //   profile: dataObj.profile,
      //   content: dataObj.profile,
      // };
      // this.apiService.post(this.CREATE_COMMENT_URL, {});
    }
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
