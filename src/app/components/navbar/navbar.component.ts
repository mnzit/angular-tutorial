import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('avatar', {read: ElementRef})
  public avatar!: ElementRef;

  @ViewChild('firstname', {read: ElementRef})
  public firstname!: ElementRef;


  constructor(private userService: UserService) {
    this.userService.profileAvatarChangeEvent.subscribe((fileList) => {
      this.avatar.nativeElement.src = URL.createObjectURL(fileList[0]);
    })

    this.userService.profileFirstnameChangeEvent.subscribe((firstname) => {
      this.firstname.nativeElement.innerText = firstname;
    })
  }

  ngOnInit(): void {
  }

}
