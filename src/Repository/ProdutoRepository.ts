export interface ProdutoRepository {
    buscarID(id: number): any | null
    listar(): void;
    salvar(produto: any): void
    atualizar(id: number, produtoAtualizado: any): void
    deletar(id: number): void
}