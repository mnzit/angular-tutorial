import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public profileAvatarChangeEvent: Subject<FileList> = new Subject<FileList>();
  public profileFirstnameChangeEvent: Subject<string> = new Subject<string>();

  constructor() {
  }
}
