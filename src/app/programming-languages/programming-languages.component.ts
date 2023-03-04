import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programming-languages',
  templateUrl: './programming-languages.component.html',
  styleUrls: ['./programming-languages.component.css']
})
export class ProgrammingLanguagesComponent {
  constructor(private routerObj: Router) { }
  goToHomeComp() {
    this.routerObj.navigate([""]);
  }
}
