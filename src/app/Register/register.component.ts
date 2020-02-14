import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({ selector: 'app-register', templateUrl: `register.component.html` })
export class RegisterComponent implements OnInit {

  group: FormGroup;

  constructor(private builder: FormBuilder, private router: Router) {  }
  fname;
  uname;
  pass;

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

  // on submit function
  submitForm() {
    if (localStorage) {
      localStorage.setItem('fullname', this.fname);
      localStorage.setItem('username', this.uname);
      localStorage.setItem('password', this.pass);
      this.router.navigate(['/Login']);
    } else if (this.group.invalid) {
      alert('Please fill in all values');
      return;
    }

    // do submit action
  }

}
