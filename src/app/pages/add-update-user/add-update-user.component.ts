import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.scss'],
})
export class AddUpdateUserComponent implements OnInit {
  userFrom!: FormGroup;
  userId!: number;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    const params: any = this.activatedRoute.snapshot.params;
    if (params?.id) {
      this.userId = parseInt(params.id);
      this.patchForm();
    }
  }

  initForm() {
    this.userFrom = this.formBuilder.group({
      id: [],
      name: [],
      work: [],
      email: [],
      address: [],
      city: [],
      enable: [false],
    });
  }

  patchForm() {
    const user = this.userService.getUserById(this.userId);
    if (user) {
      this.userFrom.patchValue({
        id: user.id,
        name: user.name,
        work: user.work,
        email: user.email,
        address: user.address,
        city: user.city,
        enable: user.enable,
      });
    }
  }

  submit() {
    const user = {
      name: this.userFrom.value.name,
      work: this.userFrom.value.work,
      email: this.userFrom.value.email,
      address: this.userFrom.value.address,
      city: this.userFrom.value.city,
      enable: this.userFrom.value.enable,
    };
    this.userId ? this.updateUser(user) : this.addUser(user);
  }

  updateUser(user: User) {
    this.userService.updateUser(this.userId, user);
    this.router.navigate(['']);
  }

  addUser(user: any) {
    user.id = this.userService.users.length + 1;
    this.userService.addUser(user);
    this.router.navigate(['']);
  }

  goBack() {
    this.router.navigate(['']);
  }
}
