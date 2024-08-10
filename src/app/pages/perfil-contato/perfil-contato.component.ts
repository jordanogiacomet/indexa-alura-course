import { Component } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { Contato } from '../../components/contact/contato';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent {
  contato: Contato = {
    id: 0,
    nome: 'dev',
    telefone: '1231231331',
    email: 'dev@email.com',
    aniversario: '12/10/1999',
    redes: 'dev.com',
  };
};
