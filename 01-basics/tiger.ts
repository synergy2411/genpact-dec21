import { Animal } from './animal.model'

export class Tiger{
    private obj : Animal;
    constructor(obj : Animal){
        this.obj = obj;
    }
    getDetails(){
        console.log(`${this.obj.species} has ${this.obj.legs} legs....`)
    }
}