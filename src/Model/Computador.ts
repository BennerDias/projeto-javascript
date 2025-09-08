import { Produto } from "./produto"

export class Computador extends Produto {
    private _processador: string
    private _ram: string
    private _hd: string

    constructor(id: number, nome: string, preco: number, estoque: number, processador: string, ram: string, hd: string){
        super(id, nome, preco, estoque)
        this._processador = processador
        this._ram = ram
        this._hd = hd
    }

    public get processador(){
        return this._processador
    }
    public set processador(processador: string){
        this._processador = processador
    }

    public get ram(){
        return this._ram
    }
    public set ram(ram: string){
        this._ram = ram
    }

    public get hd(){
        return this._hd
    }
    public set hd(hd: string){
        this._hd = hd
    }
}