import * as readlinesync from "readline-sync"
import { colors } from "./src/util/Colors";
import { Notebook } from "./src/model/Notebook";
import { Celular } from "./src/model/Celular";

export function main() {
    let menu: number;
    let notebook, celular: string;

    const not: Notebook = new Notebook(1, 'Samsung', 2, 4000, 'INTEL');
    not.visualizar()


    const cel: Celular = new Celular(2, 'apple', 1, 5000, 'IOS')
    cel.visualizar()



    while (true) {
        console.log(colors.bg.black, colors.fg.blue, "*".repeat(35))
        console.log("|                                    |");
        console.log("|           TechStore JS             |");
        console.log("|                                    |");
        console.log(`|************************************|`);
        console.log("|  [1] -> Cadastrar Produto          |");
        console.log("|                                    |");
        console.log("|  [2] -> Listar Todos os Produtos   |");
        console.log("|                                    |");
        console.log("|  [3] -> Listar Produto por Id      |");
        console.log("|                                    |");
        console.log("|  [4] -> Atualizar Produto          |");
        console.log("|                                    |");
        console.log("|  [5] -> Deletar Produto            |");
        console.log("|                                    |");
        console.log("|  [0] -> Sair do Menu               |");
        console.log(` ************************************ `);
        console.log(colors.reset);

        menu = readlinesync.questionInt("\nEntre com a opcao desejada: ");

        switch (menu) {
            case 1:
                console.log(colors.fg.bluestrong,
                    "\nCadastrar Produto\n", colors.reset);
                
                keyPress()
                break;

            case 2:
                console.log(colors.fg.bluestrong,
                    "\nListar Todos os Produtos\n", colors.reset);
                keyPress()
                break;

            case 3:
                console.log(colors.fg.bluestrong,
                    "\nListar Produto por Id\n", colors.reset);
            
                keyPress()
                break;

            case 4:
                console.log(colors.fg.bluestrong,
                    "\nAtualizar Produto\n", colors.reset);

                keyPress()
                break;

            case 5:
                console.log(colors.fg.bluestrong,
                    "\nDeletar Produto\n", colors.reset);
                keyPress()
                break;

            case 0:
                console.log("-=".repeat(30));
                console.log(colors.fg.bluestrong,
                    "\nA TechStore JS te deseja um excelente dia, preço baixo é aqui! \n\n", colors.reset);
                sobre();
                process.exit(0); // Saída do programa

            default:
                console.log(colors.fg.bluestrong,
                    "\nOpção Inválida!\n", colors.reset);
                break;
        }
    }
}


function sobre(): void {
    console.log("-=".repeat(30));
    console.log("\nProjeto desenvolvido por: Joshua Aguilar Simionato\n")
    console.log("\nEmail: joshua.simionato@gmail.com\n")
    console.log("\nGitHub: https://github.com/JoshuaSimionato\n\n")
    console.log("-=".repeat(30));
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main(); //Função Principal