import { Produto } from "./Produto";

export class Celular extends Produto {
    
    private _sistemaOperacional: string;

	constructor(id: number, nome: string, tipo: number, preco: number, sistemaOperacional: string) {
        super(id, nome, tipo, preco);
		this._sistemaOperacional = sistemaOperacional;
	}

	public get sistemaOperacional(): string {
		return this._sistemaOperacional;
	}

	public set sistemaOperacional(nome: string) {
		this._sistemaOperacional = nome;
	}

    public visualizar(): void {
        super.visualizar()
        console.log("sistemaOperacional: " + this._sistemaOperacional);
    }

}