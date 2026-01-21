import { Component, HostListener } from '@angular/core'; // Importe o HostListener
import { RouterModule } from '@angular/router';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isScrolled = false; // Propriedade para controlar o estado

  // O HostListener "escuta" eventos do navegador, neste caso, o 'scroll' da janela
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Se o scroll vertical for maior que 10 pixels, a propriedade vira true
    this.isScrolled = window.scrollY > 10;
  }

}