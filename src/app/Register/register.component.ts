import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({ selector: 'app-register', templateUrl: `register.component.html` })
export class RegisterComponent implements OnInit {

  group: FormGroup;

  constructor(private builder: FormBuilder, private router: Router) {  }
  afasfname;
  afasuname;
  afaspass;

  ngOnInit(): void {
    // set up form
    // check for log in
    this.group = this.builder.group({
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  getValues() { return this.builder.control; }

  submitForm() {
    if (localStorage) {
      localStorage.setItem('fullname', this.afasfname);
      localStorage.setItem('username', this.afasuname);
      localStorage.setItem('password', this.afaspass);
      this.router.navigate(['/Login']);
    } else if (this.group.invalid) {
      alert('Please fill in all values');
      return;
    }
  }
}
