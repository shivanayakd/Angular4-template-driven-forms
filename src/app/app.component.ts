import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  isChecked = false;
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  loadData() {
    this.isChecked = !this.isChecked;
    if(this.isChecked) {
      this.clearForm();
      this.signupForm.setValue({
        userData: {
          username: 'Mark Gapper',
          email: 'gapper.mark@gmail.com'
        },
        secret: 'pet',
        questionAnswer: 'my cat',
        gender: 'male'
      });
    }
    else {
      this.clearForm();
    }

  }

  clearForm() {
    this.signupForm.reset()
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.clearForm();
  }
}
