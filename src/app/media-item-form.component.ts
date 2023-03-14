import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent /**implements OnInit **/ {
  constructor(private fb: FormBuilder) { }
  mediaDetailsForm = this.fb.group({
    name: ['', Validators.required],
    medium: ['Movies'],
    category: [''],
    year:['']
  });
 /** form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('enter name here', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl('Action'),
      year: new FormControl('1900', this.yearValidator),
    });
  }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        year: {
          min: minYear,
          max: maxYear
        }
      };
    }
  }**/

  onSubmit(mediaItem) {
    console.log(mediaItem);
    this.mediaDetailsForm.reset();
  }
}
