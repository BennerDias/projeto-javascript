import { ProdutoController } from "../src/Controller/ProdutoController";
import { InvalidOptionError } from "../src/errors/OpcaoInvalida";
import { Computador } from "../src/Model/Computador";
import { Smartphone } from "../src/Model/Smartphone";
import { Colors } from "../src/util/Colors/colors";
import leia from "readline-sync";


export function main(){
    let produtos: ProdutoController = new ProdutoController();
    let usuario: any
    let opcao: number;

    let id,  estoque, tipo: number
    let nome, marca, preco, modelo, processador, ram, hd: string
    const tiposProdutos = ['Computador', 'Smartphone']

    // TESTES

    let pc1: Computador = new Computador(produtos.gerarID(), 'Ryzen 5', '2500', 5, 'AMD', '16gb', '1tb', 1)
    produtos.salvar(pc1)

    let pc2: Computador = new Computador(produtos.gerarID(), 'i9', '4600', 6, 'Intel', '32gb', '2tb', 1)
    produtos.salvar(pc2)

    let pc3: Computador = new Computador(produtos.gerarID(), 'Ryzen 7', '4500', 4, 'AMD', '32gb', '1Tb SSD', 1)
    produtos.salvar(pc3)

    let sp1: Smartphone = new Smartphone(produtos.gerarID(), 'iPhone 16', '4500', 7, 'Apple', 'Pro max', 2)
    produtos.salvar(sp1)

    let sp2: Smartphone = new Smartphone(produtos.gerarID(), 'Samsung Galaxy', '6000', 5, 'Samsung', 'Galaxy Ultra 25', 2)
    produtos.salvar(sp2)

    let sp3: Smartphone = new Smartphone(produtos.gerarID(), 'Xiaomi Mi', '10500', 9, 'Xiaomi', 'Mi 15 Ultra', 2)
    produtos.salvar(sp3)

    
    while (true) {
        
        console.log(Colors.bg.black, Colors.fg.blue, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                Bem vindo a piXau!                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar produto                    ");
        console.log("            2 - Listar todos os produtos             ");
        console.log("            3 - Buscar produto por ID                ");
        console.log("            4 - Atualizar Dados da produto           ");
        console.log("            5 - Apagar produto                       ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        Colors.reset);

        console.log("Entre com a opção desejada: ");

        try{ 
            usuario = leia.question("");
            opcao = parseInt(usuario)

            if(isNaN(opcao)){
                throw new InvalidOptionError("Opção inválida! Digite apenas o número correspondente a opção desejada.")
            }
        } catch (error) {
            if(error instanceof InvalidOptionError){
                console.log(Colors.fg.red, `\n${error.message}\n`, Colors.reset)
            } else {
                console.log(Colors.fg.red, "\nErro inesperado!\n", Colors.reset);
            }
            keyPress()
            continue
        }

        if (opcao == 0) {
            console.log(Colors.fg.greenstrong, "\nObrigado por utilizar o nosso programa, até logo!");
            console.log(Colors.reset, "");
            process.exit(0);
        }
        
        switch (opcao) {
            case 1:
                console.log(Colors.fg.green, "\nCadastro de Produto\n", Colors.reset);

                nome = leia.question('Digite o nome do produto: ')

                preco = leia.question(`Qual o valor do ${nome}? `)

                estoque = leia.questionInt('Quantas unidades deseja cadastrar no estoque? ')

                console.log('Qual o tipo do seu produto? Selecione: ')
                tipo = leia.keyInSelect(tiposProdutos, '', {cancel: false}) + 1;

                switch(tipo){
                    case 1:
                        processador = leia.question('Qual o processador do computador? ')
                        ram = leia.question('Qual a capacidade de memória Ram? ')
                        hd = leia.question('Qual a capacidade do HD? ')
                            produtos.salvar(new Computador(produtos.gerarID(), nome,  preco, estoque, processador, ram, hd, tipo))
                        break;
                    case 2:
                        marca = leia.question('Qual o marca do Smartphone? ')
                        modelo = leia.question('Qual o modelo? ')
                            produtos.salvar(new Smartphone(produtos.gerarID(), nome, preco, estoque, marca, modelo, tipo))
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(Colors.fg.green, "\nListar todos os produtos\n", Colors.reset);
                produtos.listar()
                keyPress()
                break;
            case 3:
                console.log(Colors.fg.green, "\nBuscar produto por ID\n", Colors.reset);
                id = leia.questionInt('Digite o ID do produto que deseja consultar: ')
                produtos.buscarID(id)

                keyPress()
                break;
            case 4:
                console.log(Colors.fg.green, "\nAtualizar dados do produto\n", Colors.reset);
                
                id = leia.questionInt('Qual o ID do produto que deseja Atualizar? ')

                let produto = produtos.buscarProduto(id)

                if(produto != null){
                    nome = leia.question('Digite o nome do produto: ')

                    preco = leia.question(`Qual o valor do ${nome}? `)

                    estoque = leia.questionInt('Quantas unidades deseja cadastrar no estoque? ')

                    tipo = produto.tipo

                    switch(tipo){
                    case 1:
                        processador = leia.question('Qual o processador do computador? ')
                        ram = leia.question('Qual a capacidade de memória Ram? ')
                        hd = leia.question('Qual a capacidade do HD? ')
                        produtos.atualizar(new Computador(id, nome,  preco, estoque, processador, ram, hd, tipo))
                        break;
                    case 2:
                        marca = leia.question('Qual o marca do Smartphone? ')
                        modelo = leia.question('Qual o modelo? ')
                        produtos.atualizar(new Smartphone(id, nome, preco, estoque, marca, modelo, tipo))
                        break;
                    } 
                } else{
                    console.log(Colors.fg.red, `\nProduto ID: ${id} nao encontrado!`)
                }

                
                keyPress()
                break;
            case 5:
                console.log(Colors.fg.green, "\nApagar produto\n", Colors.reset);
                id = leia.questionInt('Digite o ID do produto: ')
                produtos.deletar(id)
                keyPress()
                break;
            default:
                console.log(Colors.fg.red, "\nOpção inválida!\n", Colors.reset);
                keyPress()
                break;
        }
    }
}
function keyPress(): void {
    console.log(Colors.reset, "");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}
main();