export abstract class Produto {
    private _id: number
    private _nome: string
    private _preco: string
    private _estoque: number
    private _tipo: number
    
    constructor(id: number, nome: string, preco: string, estoque: number, tipo: number){
        this._id = id
        this._nome = nome
        this._preco = preco
        this._estoque = estoque
        this._tipo = tipo
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

    public set preco(preco: string){
        this._preco = preco
    }

    public get estoque(){
        return this._estoque
    }

    public set estoque(estoque: number){
        this._estoque = estoque
    }

    public get tipo (){
        return this._tipo
    }

    public set tipo(tipo: number){
        this._tipo = tipo
    }
    

    public listar(): void {
        let tipo: string = '';

        switch (this._tipo){
            case 1:
                tipo = 'Computador'
                break
            case 2:
                tipo = 'Smartphone'
                break
            }

            console.log(`ID: ${this.id}`)
            console.log(`Nome: ${this.nome}`)
            console.log(`Preço: R$${this.preco}`)
            console.log(`Estoque: ${this.estoque} unidades`)
            console.log(`Tipo: ${tipo}`)
    }
}