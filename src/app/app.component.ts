import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./components/container/container.component";
import { HeaderComponent } from "./components/header/header.component";
import { SeparatorComponent } from "./components/separator/separator.component";
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms'

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './agenda.json';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, HeaderComponent, SeparatorComponent, ContactComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto : string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtroPorTexto: string = '';


  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.contatos.filter(contato => contato.nome.toLowerCase().startsWith(letra.toLowerCase()));
    };
  };

