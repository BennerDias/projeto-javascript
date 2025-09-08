import { Produto } from "../Model/Produto";
import { ProdutoRepository } from "../Repository/ProdutoRepository";
import { Colors } from "../util/Colors/colors";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    id: number = 0;

    buscarID(id: number): void {
        let produtoProcurado = this.buscarProduto(id);

        produtoProcurado != null ? produtoProcurado.listar() : console.log(Colors.fg.red, "\nProduto não encontrado!", Colors.reset);
    }

    listar(): void {
        for (let produto of this.listaProdutos) {
            produto.listar();
        }
    }

    salvar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(Colors.fg.green, `\nProduto: ${produto.nome} cadastrado com sucesso!`, Colors.reset);

    }
    atualizar(produto: Produto): void {
        let produtoProcurado = this.buscarProduto(produto.id);

            if (produtoProcurado != null) {
                this.listaProdutos[this.listaProdutos.indexOf(produtoProcurado)] = produto;
                console.log(Colors.fg.green, `\nProduto atualizado com sucesso!`, Colors.reset);
            } else {
                console.log(Colors.fg.red, "\nProduto não encontrado!", Colors.reset);
            }
    }    
    deletar(id: number): void {
        let produtoProcurado = this.buscarProduto(id);

        produtoProcurado != null ? this.listaProdutos.splice(this.listaProdutos.indexOf(produtoProcurado), 1) : console.log(Colors.fg.red, "\nProduto não encontrado!", Colors.reset);
    }

        // Método auxiliar para gerar ID único
    gerarID(): number{
        return ++ this.id;
    }

    // Checa se um Produto existe

    buscarProduto(id: number): Produto | null {
        for (let conta of this.listaProdutos){
            if(conta.id === id)
                return conta;
        }

        return null;
    }
}