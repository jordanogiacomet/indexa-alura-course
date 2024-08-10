import { Component } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { SeparatorComponent } from "../../components/separator/separator.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FormsModule } from '@angular/forms'

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}
import agenda from '../../agenda.json';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [CommonModule, ContainerComponent, HeaderComponent, SeparatorComponent, ContactComponent, FormsModule, RouterLink],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {
  alfabeto : string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtroPorTexto: string = '';


  normalizeContato(nome: string): string {
    return nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  } 

  filtrarContatosPorTexto(): Contato[] {
    if(!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter(contato => this.normalizeContato(contato.nome).includes(this.normalizeContato(this.filtroPorTexto.toLowerCase())));
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter(contato => contato.nome.toLowerCase().startsWith(letra.toLowerCase()));
    };

}
