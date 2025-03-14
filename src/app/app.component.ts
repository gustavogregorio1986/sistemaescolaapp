import { ChangeDetectorRef, Component, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isDesktop: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
      this.cdr.detectChanges(); // Atualiza a interface ao mudar o tamanho da tela
    });
  }

  checkScreenSize() {
    this.isDesktop = window.innerWidth > 768;
    if (!this.isDesktop && this.sidenav) {
      this.sidenav.close(); // Fecha o menu em telas pequenas
    } else if (this.sidenav) {
      this.sidenav.open(); // Abre o menu automaticamente em telas grandes
    }
  }
}
