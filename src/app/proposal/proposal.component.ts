import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    // Crecer el botón de "Sí" si se presiona "No"
    noButton?.addEventListener('click', () => {
      yesButton?.classList.add('grow');
    });

    // Redirigir a la pantalla de "Felicidades" cuando se presiona "Sí"
    yesButton?.addEventListener('click', () => {
      this.router.navigate(['/congrats']);
    });
  }

}
