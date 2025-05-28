import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
import { faPencil} from '@fortawesome/free-solid-svg-icons/faPencil';
import { faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-http-user',
  imports: [FontAwesomeModule, CommonModule, FormsModule],
  templateUrl: './http-user.component.html',
  styleUrl: './http-user.component.css'
})
export class HttpUserComponent {

  userArr:any;
  faTrash=faTrash;
  faPencil=faPencil;
  faSpinner=faSpinner;
  isLoading:boolean=false;
  isEditMode:boolean=false;
  userForm = {
  id:'',
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  sal: ''
};
  constructor(private userService:UserService){}
  ngOnInit(){
    this.loadUsers();
  }
  loadUsers(){
    this.isLoading=true;
    this.userService.fetchUserData().subscribe((users)=>{
    this.userArr=users;
    this.isLoading = false;
  });
  }
  deleteConfirmation(id:any){
    console.log(id);
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }
  editConfirmation(user: any){
    this.userForm = { ...user };
    this.isEditMode = true;
  }
  submitForm(){
    if (this.isEditMode) {
      this.userService.updateUser(this.userForm).subscribe(() => {
        this.resetForm();
        this.loadUsers();
      });
    } 
    else {
      this.userForm.id = ''+this.getNextUserId();
      this.userService.addUser(this.userForm).subscribe(() => {
        this.resetForm();
        this.loadUsers();
      });
    }
  }
  resetForm(){
    this.userForm = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  sal: ''
};
 this.isEditMode = false;
  }
  getNextUserId() {
  if (!this.userArr || this.userArr.length === 0) {
    return 1;
  }
  const ids = this.userArr.map((user: { id: any; }) => user.id);
  return Math.max(...ids) + 1;
}
}
