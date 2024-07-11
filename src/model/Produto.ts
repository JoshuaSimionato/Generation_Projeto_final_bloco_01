import { colors } from "../util/Colors";

export abstract class Produto {    //Classe Mãe

    // Atributos da Classe Produto
    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;
    produto: any;

    // Método Construtor da Classe Produto

	constructor(id: number, nome: string, tipo: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
	}

    // Métodos Get e Set

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get preco(): number {
		return this._preco;
	}

	public set id(value: number) {
        this._id = value;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public set preco(value: number) {
        this._preco = value;
    }


    public visualizar(): void {
        let tipo: string = "";
        switch(this._tipo){
            case 1:
                tipo = "Celular";
                break;
            case 2:
                tipo = "Notebook"
                break;
            default:
                console.log(colors.fg.magentastrong, 
                    "\nOpção Inválida!\n", colors.reset);
                    break;        
        }

        console.log(`*********** Dados do Produto ***********\n`);
        console.log(`ID do Produto: ${this._id}`);
        console.log(`Nome do Produto: ${this._nome}`);
        console.log(`Tipo do Produto: ${this._tipo}`);
        console.log(`Preço do Produto: ${this._preco.toLocaleString('pt-BR', 
            { style: 'currency', currency: 'BRL'})}`);

    }

}   