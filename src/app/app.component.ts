import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }
  title = 'TS';
  public toHome(): any {
    document.getElementById('hd').scrollIntoView({ behavior: 'smooth' });
  }
  public toAbout(): any {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }
  public toService(): any {
    document.getElementById('service').scrollIntoView({ behavior: 'smooth' });
  }
  public toProjects(): any {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  }
  public toExperience(): any {
    document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
  }
  public toTools(): any {
    document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
  }
  public toLanguages(): any {
    document.getElementById('languages').scrollIntoView({ behavior: 'smooth' });
  }
  public toSkills(): any {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  }
  public toContact(): any {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
  public tofooter(): any{
    document.getElementById('footer').scrollIntoView({behavior: 'smooth'});
  }
  ngOnInit(): void {
  }
}
