import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public selectedFiles!: FileList;

  constructor(private userService: UserService) { }


  @ViewChild('avatar', {read: ElementRef})
  public avatar!: ElementRef;

  ngOnInit(): void {

  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
    this.avatar.nativeElement.src = URL.createObjectURL(this.selectedFiles[0]);
    this.userService.profileAvatarChangeEvent.next(this.selectedFiles);
  }

  firstNameChange(event:any){
      this.userService.profileFirstnameChangeEvent.next(event.target.value);
  }
}
