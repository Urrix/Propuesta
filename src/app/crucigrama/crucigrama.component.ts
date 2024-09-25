import { Component } from '@angular/core';

@Component({
  selector: 'app-crucigrama',
  templateUrl: './crucigrama.component.html',
  styleUrls: ['./crucigrama.component.css']
})
export class CrucigramaComponent {
  letras: string[][] = [];
  palabras: string[] = ['ATARDECER', 'GYMNASIA', 'APIO', 'TINTO', 'ATTACK OF TITAN', 'TACOS DE PASTOR', 'VERDE', 'COCA COLA', 'CAGUAMA', 'CURRY', 'NUGGET', 'NUTELLO', 'AGUA MINERAL', 'TE AMO', 'SAL', 'ABBA'];
  palabrasPosicionadas: { palabra: string, coords: { x: number, y: number }[], encontrada: boolean }[] = [];
  pistas: { palabra: string, encontrada: boolean }[] = [];
  seleccionadas: { x: number, y: number }[] = [];
  seleccionando: boolean = false;

  ngOnInit() {
    this.generarSopaDeLetras();
    this.inicializarPistas();
  }

  generarSopaDeLetras() {
    const tamaño = 15;
    this.letras = Array(tamaño).fill(null).map(() => Array(tamaño).fill(''));
    this.palabras.forEach(palabra => {
      let colocada = false;
      let intentos = 0;
      while (!colocada && intentos < 100) {
        const direccion = this.seleccionarDireccion();
        const x = Math.floor(Math.random() * tamaño);
        const y = Math.floor(Math.random() * tamaño);
        if (this.puedeColocarPalabra(palabra.replace(/ /g, ''), x, y, direccion)) {
          this.colocarPalabra(palabra.replace(/ /g, ''), x, y, direccion);
          colocada = true;
        }
        intentos++;
      }
    });
    this.rellenarSopa();
  }

  inicializarPistas() {
    this.pistas = this.palabras.map(palabra => ({
      palabra: palabra,
      encontrada: false
    }));
  }

  seleccionarDireccion() {
    const direcciones = ['horizontal', 'vertical', 'diagonal'];
    return direcciones[Math.floor(Math.random() * direcciones.length)];
  }

  puedeColocarPalabra(palabra: string, x: number, y: number, direccion: string) {
    if (direccion === 'horizontal' && y + palabra.length > this.letras.length) return false;
    if (direccion === 'vertical' && x + palabra.length > this.letras.length) return false;
    if (direccion === 'diagonal' && (x + palabra.length > this.letras.length || y + palabra.length > this.letras.length)) return false;

    for (let i = 0; i < palabra.length; i++) {
      if (direccion === 'horizontal' && this.letras[x][y + i] !== '') return false;
      if (direccion === 'vertical' && this.letras[x + i][y] !== '') return false;
      if (direccion === 'diagonal' && this.letras[x + i][y + i] !== '') return false;
    }
    return true;
  }

  colocarPalabra(palabra: string, x: number, y: number, direccion: string) {
    const coords: { x: number, y: number }[] = [];
    for (let i = 0; i < palabra.length; i++) {
      if (direccion === 'horizontal') {
        this.letras[x][y + i] = palabra[i];
        coords.push({ x, y: y + i });
      } else if (direccion === 'vertical') {
        this.letras[x + i][y] = palabra[i];
        coords.push({ x: x + i, y });
      } else if (direccion === 'diagonal') {
        this.letras[x + i][y + i] = palabra[i];
        coords.push({ x: x + i, y: y + i });
      }
    }
    this.palabrasPosicionadas.push({ palabra, coords, encontrada: false });
  }

  rellenarSopa() {
    const letrasPosibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < this.letras.length; i++) {
      for (let j = 0; j < this.letras[i].length; j++) {
        if (this.letras[i][j] === '') {
          this.letras[i][j] = letrasPosibles[Math.floor(Math.random() * letrasPosibles.length)];
        }
      }
    }
  }

  startSelection(x: number, y: number) {
    this.seleccionando = true;
    this.seleccionadas = [{ x, y }];
  }

  continueSelection(x: number, y: number) {
    if (this.seleccionando) {
      this.seleccionadas.push({ x, y });
    }
  }

  endSelection() {
    this.seleccionando = false;
    this.verificarSeleccion();
    this.seleccionadas = [];
  }

  verificarSeleccion() {
    this.palabrasPosicionadas.forEach(palabra => {
      const seleccionadaCoords = JSON.stringify(this.seleccionadas);
      const palabraCoords = JSON.stringify(palabra.coords);
      if (seleccionadaCoords === palabraCoords) {
        palabra.encontrada = true;
        this.marcarPistaComoEncontrada(palabra.palabra);
      }
    });
  }

  marcarPistaComoEncontrada(palabra: string) {
    const pista = this.pistas.find(p => p.palabra === palabra);
    if (pista) {
      pista.encontrada = true;
    }
  }

  esSeleccionada(x: number, y: number) {
    return this.seleccionadas.some(coord => coord.x === x && coord.y === y);
  }

  esEncontrada(palabra: string) {
    return this.pistas.find(p => p.palabra === palabra)?.encontrada;
  }
}
