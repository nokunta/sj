import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void {
  }
  inputValue!: string;
  showVideo: boolean = false;
  embedUrl!: string;
  errorMessage!: string;

  submitForm() {
    if (this.inputValue === '21072022') {
      this.router.navigate(['/q3'])
    } else {
      this.showVideo = true;
      this.errorMessage = 'Não é essa a password baby! Está relacionada com esta data. Apenas números.';
    }
  }
}
