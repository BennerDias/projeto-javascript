import { Produto } from "../Model/Produto";

export interface ProdutoRepository {
    buscarID(id: number): void
    listar(): void;
    salvar(produto: Produto): void
    atualizar(produto: Produto): void
    deletar(id: number): void
}