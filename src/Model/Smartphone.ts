import { Produto } from "./Produto"

export class Smartphone extends Produto {
    private _marca: string
    private _modelo: string

    constructor(id: number, nome: string, preco: string, estoque: number, marca: string, modelo: string, tipo: number){
        super(id, nome, preco, estoque, tipo)
        this._marca = marca
        this._modelo = modelo
    }

    public get marca(){
        return this._marca
    }
    public set marca(marca: string){
        this._marca = marca
    }

    public get modelo(){
        return this._modelo
    }
    public set modelo(modelo: string){
        this._modelo = modelo
    }

    listar(): void{
        super.listar();
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`=======================================`)
    }

}