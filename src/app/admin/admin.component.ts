import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin-service.service';
import {Admin} from '../model/Admin'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService : AdminService) { 
    this.adminService.fetchAllAdmins();
  }

  admins : Admin[];

  ngOnInit(): void {
    this.adminService.fetchAllAdmins().subscribe(data => {
      this.admins = data;
    });
  }

}
