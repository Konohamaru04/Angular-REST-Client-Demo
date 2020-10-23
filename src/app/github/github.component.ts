import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import 'bootstrap/dist/css/bootstrap.min.css';

import { UserInfo } from '../userinfo';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  submit = false;

  login: string;
  id: number;
  avatarUrl: string;
  name: string;
  company: string;
  blog: string;
  followers: number;
  following: number;

  user: UserInfo = {
    id: 0,
    username: ''
  };

  repos: any;

  onSubmit(data: { [x: string]: string; }) {
    this.submit = true;
    this.user.username = data['username'];

    this.apiService.getData(this.user.username).subscribe((data) => {
      this.login = data['login'];
      this.id = data['id'];
      this.avatarUrl = data['avatar_url'];
      this.name = data['name'];
      this.company = data['company'];
      this.blog = data['blog'];
      this.followers = data['followers'];
      this.following = data['following'];

      this.apiService.getRepos(this.user.username).subscribe((data) => {
      
        this.repos = data;
      });
    },
      (error) => {
        console.log(error);
      });
  
  }

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }



}

//http://githubrestapi.s3-website.ap-south-1.amazonaws.com