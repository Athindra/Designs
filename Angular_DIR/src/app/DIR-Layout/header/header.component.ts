import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName$: Observable<string>;
  menuClass: string = 'No';
  constructor(private userService: LoginService) { }

  ngOnInit() {
    this.menuClass = 'No';
    
  }
  getMessage(): Observable<any> {
   // console.log(this.userService.userName);
    return this.userService.userName.asObservable();
}
  showMenu() {
    this.menuClass = 'Yes';
    //console.log('Yes');
  }
  hideMenu() {
    this.menuClass = 'No';
    //console.log('No');
  }


}
