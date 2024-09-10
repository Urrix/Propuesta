import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.css']
})
export class CollageComponent {
  photos = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ];

  constructor(private router: Router) {}

  goToProposal() {
    this.router.navigate(['/proposal']);
  }
}
