export abstract class Produto {
    private _id: number
    private _nome: string
    private _preco: number
    private _estoque: number
    
    constructor(id: number, nome: string, preco: number, estoque: number){
        this._id = id
        this._nome = nome
        this._preco = preco
        this._estoque = estoque
    }

    public get id(){
        return this._id
    }

    public set id(id: number){
        this._id = id
    }

    public get nome(){
        return this._nome
    }  

    public set nome(nome: string){
        this._nome = nome
    }

    public get preco(){
        return this._preco
    }

    public set preco(preco: number){
        this._preco = preco
    }

    public get estoque(){
        return this._estoque
    }

    public set estoque(estoque: number){
        this._estoque = estoque
    }

    public listar(): void {
        console.log(`ID: ${this.id}`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Preço: R$${this.preco.toFixed(2)}`)
        console.log(`Estoque: ${this.estoque} unidades`)
    }
}