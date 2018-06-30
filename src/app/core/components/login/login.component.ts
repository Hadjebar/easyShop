import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loading = false;
  public error = null;
  srcImg = 'assets/images/login/1.jpeg';

  public form = {
    email: null,
    password: null
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('dss');
  }
}
