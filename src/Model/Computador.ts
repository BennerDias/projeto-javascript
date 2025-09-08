import { Produto } from "./Produto"

export class Computador extends Produto {
    private _processador: string
    private _ram: string
    private _hd: string

    constructor(id: number, nome: string, preco: string, estoque: number, processador: string, ram: string, hd: string, tipo: number){
        super(id, nome, preco, estoque, tipo)
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

    listar(): void{
        super.listar();
        console.log(`Processador: ${this.processador}`)
        console.log(`Ram: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
        console.log(`=======================================`)
    }
}