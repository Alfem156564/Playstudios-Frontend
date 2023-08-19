import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private toastr: ToastrService) { }
  
  showSuccess(txt: string) {
    this.toastr.success(txt, 'Success');
  }
  
  showFailure(txt: string) {
    this.toastr.error(txt, 'Failure');
  }
  
  showWarning(txt: string) {
    this.toastr.warning(txt, 'Warning');
  }
}
