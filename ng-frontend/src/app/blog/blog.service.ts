import { Injectable } from '@angular/core';
import { ApiService } from '../services/http.service';
import { TimeService } from '../services/time.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  GET_COMMENTS_URL = 'comment/list';

  constructor(
    private apiService: ApiService,
    private timeService: TimeService
  ) {}
}
