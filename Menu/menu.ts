import { ProdutoController } from "../src/Controller/ProdutoController";
// import { Computador } from "../src/Model/computador";
// import { Produto } from "../src/Model/produto";
// import { Smartphone } from "../src/Model/smartphone";
import { Colors } from "../src/util/Colors/colors";
import leia from "readline-sync";

export function main(){
    let produtos: ProdutoController = new ProdutoController();
    let opcao: number;

    
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
        opcao = leia.questionInt("");

        if (opcao == 0) {
            console.log(Colors.fg.greenstrong, "\nObrigado por utilizar o nosso programa, até logo!");
            console.log(Colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.green, "\nCadastro de Produto\n", Colors.reset);
                keyPress()
                break;
            case 2:
                console.log(Colors.fg.green, "\nListar todos os produtos\n", Colors.reset);
                keyPress()
                break;
            case 3:
                console.log(Colors.fg.green, "\nBuscar produto por ID\n", Colors.reset);
                keyPress()
                break;
            case 4:
                console.log(Colors.fg.green, "\nAtualizar dados do produto\n", Colors.reset);
                keyPress()
                break;
            case 5:
                console.log(Colors.fg.green, "\nApagar produto\n", Colors.reset);
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