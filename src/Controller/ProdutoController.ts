import { Produto } from "../Model/produto";
import { ProdutoRepository } from "../Repository/ProdutoRepository";
import { Colors } from "../util/Colors/colors";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    id: number = 0;

    buscarID(id: number): Produto | null {
        let produtoProcurado: Produto | null = null;

        // produtoProcurado != null ? produtoProcurado() : console.log(Colors.fg.red, "\nProduto não encontrado!", Colors.reset);
        return produtoProcurado;
    }

    listar(): void {

    }
    salvar(produto: Produto): void {

    }
    atualizar(id: number, produtoAtualizado: Produto): void {
        
    }
    deletar(id: number): void {

    }
}