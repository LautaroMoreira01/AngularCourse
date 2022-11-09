
import { Component } from "@angular/core";
@Component({
    selector:'app-counter',
    template: `<h1>{{title}}</h1>
    <h2>
        La base es : {{base}}
    </h2>
    <button (click)="acumular(base)"> +{{base}} </button>
    <span>{{sum}}</span>
    <button (click)="acumular(-base)"> -{{base}} </button>`
})
export class CounterComponent{
    title : string = 'Contador app';
    sum :number = 0;
    acumular (value : number){
      this.sum += value
    }
    base : number = 10;
}