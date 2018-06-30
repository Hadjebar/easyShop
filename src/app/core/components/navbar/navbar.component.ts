import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedIn = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    //this.token.remove();
    //xœthis.authService.changeAuthStatus(false);
    this.router.navigateByUrl('/signin');
  }
}
