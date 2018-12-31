import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-service.service';
import { apiConfig } from 'src/app/config/apiConfig';
import { HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userName = new Subject<any>();
  constructor(private baseService: BaseServiceService, private route: ActivatedRoute,
    private router: Router) { }

  // login(user: User) {

  //   this.baseService.post(apiConfig.loginUrl, user, false).subscribe(result => {
  //     if (result) {
  //       this.userName.next({ text: user.Username });
  //       localStorage.setItem('user', result.toString());   
  //       this.router.navigate(['/home']);    
  //     }
  //   })
  // }
  // test() {
  //   this.baseService.get(apiConfig.createUserUrl, true).subscribe(data => {
  //     console.log('test', data);
  //   })
  // }
}
