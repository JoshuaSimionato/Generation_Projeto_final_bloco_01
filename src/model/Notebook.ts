import { Produto } from "./Produto";

export class Notebook extends Produto {
    
    private _processador: string;

	constructor(id: number, nome: string, tipo: number, preco: number, processador: string) {
        super(id, nome, tipo, preco);
		this._processador = processador;
	}

	public get processador(): string {
		return this._processador;
	}

	public set processador(nome: string) {
		this._processador = nome;
	}

    public visualizar(): void {
        super.visualizar()
        console.log("processador: " + this._processador);
    }

}