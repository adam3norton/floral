import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'floralSite';
  _url = 'https://floraldatabase-default-rtdb.firebaseio.com/users.json';

  signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstEvent: new FormControl('', Validators.required),
    firstCategory: new FormControl('', Validators.required),
    firstDate: new FormControl('', Validators.required),
    secondEvent: new FormControl('', Validators.required),
    secondCategory: new FormControl('', Validators.required),
    secondDate: new FormControl('', Validators.required),
    thirdEvent: new FormControl('', Validators.required),
    thirdCategory: new FormControl('', Validators.required),
    thirdDate: new FormControl('', Validators.required),
  })

  constructor(private httpClient: HttpClient) { }

  onSubmit() {

    this.httpClient.post(this._url, this.signUpForm.value)
      .subscribe(response => console.log(response));
  }
}
