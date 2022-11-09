import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heros:string[] = ['siperman' , 'ironman', 'thor' , 'blackwidow']
  deletedHero :string = '';

  deleteHero(){
    this.deletedHero = this.heros.shift() || '';
  }

}
