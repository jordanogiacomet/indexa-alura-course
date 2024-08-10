import { Routes } from '@angular/router';
import { FormularioContatoComponent } from './pages/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './pages/lista-contatos/lista-contatos.component';
import { PerfilContatoComponent } from './pages/perfil-contato/perfil-contato.component';

export const routes: Routes = [
    {
      path: 'formulario',
      component: FormularioContatoComponent
    },
    {
      path: 'formulario/:id',
      component: FormularioContatoComponent
    },
    {
      path: 'lista-contatos',
      component: ListaContatosComponent
    },
    {
      path: 'perfil-contato/:id',
      component: PerfilContatoComponent
    },
    {
      path: '',
      redirectTo: '/lista-contatos',
      pathMatch: 'full'
    }
  ];
