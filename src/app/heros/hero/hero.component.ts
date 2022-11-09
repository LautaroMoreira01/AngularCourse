import { Component } from "@angular/core";

@Component({
    selector : 'app-hero',
    templateUrl : 'hero.component.html'
})
export class HeroComponent{
    name:string = "Spiderman"
    age:number = 23;
    getName():string {
        return `${this.name} ${this.age}`
    }
    
    get capitalizedName() : string {
        return this.name.toLocaleUpperCase(); 
    }

    changeName():void{
        this.name = 'IronMan'
    }

    changeAge():void{
        this.age = 45
    }
    
}