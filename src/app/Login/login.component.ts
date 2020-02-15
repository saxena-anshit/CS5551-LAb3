import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

  group: FormGroup;

  constructor(private builder: FormBuilder, private router: Router) { }
  afasusername;
  afaspassword;
  afasuname;
  afaspass;

  ngOnInit(): void {
    this.group = this.builder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getValues() { return this.builder.control; }

  submitForm() {
    if (localStorage) {
      console.log(localStorage);
      this.afasuname = localStorage.getItem('username');
      this.afaspass = localStorage.getItem('password');
      if (this.afasusername === this.afasuname && this.afaspassword === this.afaspass) {
        this.router.navigate(['/display']);
        return;
      }
    }
    if (this.group.invalid) {
      alert('Please fill in all values');
      return;
    }
  }
}
