import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormularioContatoComponent } from "./pages/formulario-contato/formulario-contato.component";
import { ListaContatosComponent } from "./pages/lista-contatos/lista-contatos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormularioContatoComponent, ListaContatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  };

