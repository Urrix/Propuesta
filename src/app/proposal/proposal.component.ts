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

    let growScale = 1; // Para controlar el crecimiento del botón "Sí"

    // Hacer que el botón "No" se mueva de lugar al intentar hacer clic o acercar el cursor
    noButton?.addEventListener('mouseover', () => {
      moveButtonRandomly(noButton);
    });

    // Crecer el botón de "Sí" si se presiona "No"
    noButton?.addEventListener('click', () => {
      growScale += 0.2; // Aumenta el tamaño del botón "Sí" cada vez que se hace clic en "No"

      if (yesButton) { // Verifica si el botón "Sí" existe antes de aplicar estilos
        yesButton.style.transform = `scale(${growScale})`;
      }

      moveButtonRandomly(noButton); // Mueve el botón "No" después de hacer clic
    });

    // Redirigir a la pantalla de "Felicidades" cuando se presiona "Sí"
    yesButton?.addEventListener('click', () => {
      this.router.navigate(['/congrats']);
    });

    // Función para mover el botón a una posición aleatoria en la pantalla
    function moveButtonRandomly(button: HTMLElement | null) {
      if (button) {
        const randomX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));

        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
      }
    }
  }
}
