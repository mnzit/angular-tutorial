import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

interface Action {
  value: string;
  viewValue: string;
}

interface Skill {
  value: number;
  viewValue: string;
}

interface Team {
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
    {value: 'skill', viewValue: 'Update Skill'},
    {value: 'team', viewValue: 'Update Team'},
  ];

  skills: Skill[] = [
    {value: 111, viewValue: 'Java'},
    {value: 222, viewValue: 'Angular'},
    {value: 333, viewValue: 'React'},
  ];

  teams: Team[] = [
    {value: 111, viewValue: 'BOE'},
    {value: 222, viewValue: 'BOO'},
    {value: 333, viewValue: 'BEE'},
  ];

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      actionName: ["", [Validators.required]],
      actionData: this.formBuilder.group({})
    })
    this.toggleActionData();
  }

  toggleActionData(): void {
    this.formGroup.get('actionName')?.valueChanges.subscribe((changes) => {
      let actionDataFormGroup: FormGroup = this.getActionDataFormGroup();

      switch (changes) {
        case "skill":
          actionDataFormGroup.addControl('primarySkill', new FormControl('', Validators.required));
          actionDataFormGroup.addControl('secondarySkill', new FormControl('', Validators.required));
          break;

        case "team":
          actionDataFormGroup.addControl('teamName', new FormControl('', Validators.required));
          break;
      }
    })
  }

  getActionDataFormGroup(): FormGroup {
    // Clearing existing data
    this.formGroup.removeControl("actionData");
    // Adding new actionData
    let actionDataFormGroup: FormGroup = this.formBuilder.group({});
    this.formGroup.addControl("actionData", actionDataFormGroup)
    return actionDataFormGroup;
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

  ngOnInit(): void {
  }

}
