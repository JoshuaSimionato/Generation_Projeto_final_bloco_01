import * as readlinesync from "readline-sync"
import { colors } from "./src/util/Colors";
import { Notebook } from "./src/model/Notebook";
import { Celular } from "./src/model/Celular";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {
    let menu, tipo, preco, id: number;
    let notebook, celular, nome, sistemaOperacional, processador : string;
    let tipoProduto = ['Celular', 'Notebook'];


    // Objeto da Classe ProdutoController
    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrar(new Celular(produtoController.gerarId(),
        "Apple", 1, 5000, "IOS"))

    produtoController.cadastrar(new Notebook(produtoController.gerarId(),
        "Samsung", 2, 3800, "Intel"));

    ;



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
        console.log("|  [6] -> Procurar Produto por Nome  |");
        console.log("|                                    |");
        console.log("|  [0] -> Sair do Menu               |");
        console.log(` ************************************ `);
        console.log(colors.reset);

        menu = readlinesync.questionInt("\nEntre com a opcao desejada: ");

        switch (menu) {
            case 1:
                console.log(colors.fg.bluestrong,
                    "\nCadastrar Produto\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                        celular = readlinesync.question("Digite o Sistema Operacional do Celular: ");
                        produtoController.cadastrar(new Celular(produtoController.gerarId(), nome, tipo, preco, celular));
                        break;
                    case 2:
                        notebook = readlinesync.question("Digite o Processador do Notebook: ");
                        produtoController.cadastrar(new Notebook(produtoController.gerarId(), nome, tipo, preco, notebook));
                        break;
                }
                keyPress()
                break;

            case 2:
                console.log(colors.fg.bluestrong,
                    "\nListar Todos os Produtos\n", colors.reset);
                produtoController.listarTodas();

                keyPress()
                break;

            case 3:
                console.log(colors.fg.bluestrong,
                    "\nListar Produto por Id\n", colors.reset);
                id = readlinesync.questionInt('Digite o Id do Produto: ');
                produtoController.procurarPorId(id);

                keyPress()
                break;

            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id do Produto: ");

                let produto = produtoController.buscarNoArray(id);

                if (produto !== null) {

                    nome = readlinesync.question("Digite o Nome do Produto: ");

                    tipo = produto.tipo;

                    preco = readlinesync.questionFloat("Digite o preco: (R$)");

                    switch (tipo) {
                        case 1:
                        celular = readlinesync.question("Digite o Sistema Operacional do Celular: ");
                        produtoController.atualizar(new Celular(id, nome, tipo, preco, celular));
                        break;
                    case 2:
                        notebook = readlinesync.question("Digite o Processador do Notebook: ");
                        produtoController.atualizar(new Notebook(id, nome, tipo, preco, notebook));
                        break;
                    }

                } else
                    console.log("Produto não Encontrado!");
                keyPress()
                break;

            case 5:
                console.log(colors.fg.bluestrong,
                    "\nDeletar Produto\n", colors.reset);
                id = readlinesync.questionInt('Digite o Id do Produto: ');
                produtoController.deletar(id);
                keyPress()
                break;
            case 6:
                console.log(colors.fg.bluestrong, "\nProcurar Produto por Nome\n", colors.reset); // Ajuste do case
                nome = readlinesync.question("Digite o Nome do Produto: ");
                produtoController.procurarPorNome(nome);
                keyPress();
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