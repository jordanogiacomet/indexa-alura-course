import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { SeparatorComponent } from "../../components/separator/separator.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FormsModule } from '@angular/forms'
import { ContatoService } from '../../services/contato.service';


import { RouterLink } from '@angular/router';
import { Contato } from '../../components/contact/contato';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [CommonModule, ContainerComponent, HeaderComponent, SeparatorComponent, ContactComponent, FormsModule, RouterLink],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent implements OnInit{
  alfabeto : string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = [];

  filtroPorTexto: string = '';

  constructor(private contatoService: ContatoService) {};

  ngOnInit() {
    this.contatos = this.contatoService.obterContatos();
  };

  normalizeContato(nome: string): string {
    return nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }; 

  filtrarContatosPorTexto(): Contato[] {
    if(!this.filtroPorTexto) {
      return this.contatos;
    };
    return this.contatos.filter(contato => this.normalizeContato(contato.nome).includes(this.normalizeContato(this.filtroPorTexto.toLowerCase())));
  };
  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter(contato => contato.nome.toLowerCase().startsWith(letra.toLowerCase()));
    };
};
