import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cd, Vinili } from 'models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  [x: string]: any;
  cd: Cd[];
  vinili: Vinili[];
  
  
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
 
    this.http.get('https://3000-arifmehmoona-getion-jgynhg2ntnw.ws-eu107.gitpod.io/api').subscribe(data => {
      this.cd = data['Cd'];
      this.vinili = data['Vinili'];
  });
  }
}