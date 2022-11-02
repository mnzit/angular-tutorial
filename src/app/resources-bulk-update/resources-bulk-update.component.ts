import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
