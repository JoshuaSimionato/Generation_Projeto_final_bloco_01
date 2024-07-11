import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository{

    private listaProdutos: Array<Produto> = new Array <Produto>();

    public id: number = 0;

    procurarPorNome(produto: string): void {
        let produtoLowerCase = produto.toLowerCase(); // Converter o nome digitado para minúsculas
        let buscaPorProduto = this.listaProdutos.filter(p => p.nome.toLowerCase().includes(produtoLowerCase)); // Converter o nome armazenado para minúsculas
        
        if (buscaPorProduto.length > 0) {
            buscaPorProduto.forEach(produto => produto.visualizar());
        } else {
            console.log(colors.fg.red, `\nO Produto com o nome "${produto}" não foi encontrado!`, colors.reset);
        }
    }

    procurarPorId(id: number): void {
        let buscarProduto = this.buscarNoArray(id);
        if (this.buscarNoArray !== null)
            buscarProduto?.visualizar();
        else
        console.log(colors.fg.red, `\nO Produto com Id: ${id} não foi encontrado !
                    `, colors.reset);    
    }

    listarTodas(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar();
        }
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto)
        console.log(colors.fg.bluestrong, `\nO Produto ${produto.nome} foi cadastrado com sucesso!
            `, colors.reset);
    }

    atualizar(produto: Produto): void {
        let buscarNoArray = this.buscarNoArray(produto.id)
        if (buscarNoArray !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscarNoArray)] = produto;
            console.log("\nO Produto foi atualizado!")
        } else
            console.log(colors.fg.red, `\nO Produto com Id: ${produto} não foi encontrado !
                     `, colors.reset);  
    }

    deletar(id: number): void {
        let buscarNoArray = this.buscarNoArray(id)
        if (buscarNoArray !== null) {
            const nomeProduto = buscarNoArray.nome; // Armazena o nome do produto
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscarNoArray), 1);
            console.log(colors.fg.green, `\nO Produto ${nomeProduto} foi deletado com sucesso!`, colors.reset);
        } else
            console.log(colors.fg.red, `\nO Produto não foi encontrado!`, colors.reset);     
    }

    // Métodos Auxiliares

    public gerarId(): number {
        return ++ this.id;
    }

    public buscarNoArray(id: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }
        return null;
    }

    calcularValorTotalEstoque(): number {
        let valorTotal = 0;
        for (let produto of this.listaProdutos) {
            valorTotal += produto.preco;
        }
        return valorTotal;
    }
    
}
