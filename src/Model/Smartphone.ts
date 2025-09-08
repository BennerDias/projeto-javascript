import { Produto } from "./produto"

export class Smartphone extends Produto {
    private _marca: string
    private _modelo: string

    constructor(id: number, nome: string, preco: number, estoque: number, marca: string, modelo: string){
        super(id, nome, preco, estoque)
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
}