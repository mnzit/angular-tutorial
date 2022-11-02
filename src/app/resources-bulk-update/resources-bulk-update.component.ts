import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

interface Action {
  value: string;
  viewValue: string;
}

interface Skill {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-resources-bulk-update',
  templateUrl: './resources-bulk-update.component.html',
  styleUrls: ['./resources-bulk-update.component.css']
})
export class ResourcesBulkUpdateComponent implements OnInit {

  formGroup!: FormGroup;

  actions: Action[] = [
    {value: 'job', viewValue: 'Update Skill'},
    {value: 'address', viewValue: 'Update Address'},
    {value: 'team', viewValue: 'Update Team'},
  ];

  skills: Skill[] = [
    {value: 111, viewValue: 'Java'},
    {value: 222, viewValue: 'Angular'},
    {value: 333, viewValue: 'React'},
  ];

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      actionName: ["", [Validators.required]],
      actionData: this.formBuilder.group({})
    })

    this.formGroup.controls['actionName'].valueChanges.subscribe((changes) => {
      this.formGroup.controls['actionData'] = this.formBuilder.group({});
      const actionData: FormGroup = this.formGroup.get('actionData') as FormGroup;

      switch (changes) {
        case "job":
          actionData.addControl('primarySkill', new FormControl('', Validators.required));
          actionData.addControl('secondarySkill', new FormControl('', Validators.required));
          break;
      }
    })
  }


  onSubmit() {
    console.log(this.formGroup.value);
  }

  ngOnInit(): void {
  }

}
