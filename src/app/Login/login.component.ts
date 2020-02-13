import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

  group: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.group = this.builder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getValues() { return this.builder.control }

  submitForm() {
    if (this.group.invalid) {
      alert('Please fill in all values');
      return;
    }

    // do login action
  }
}
