import { Pedidos } from "./pedidos";

export class Cliente {
    IDCLIENTE: number;
    CPF: string;
    NOME: string;
    TELEFONE: string;
    DTNASCIMENTO: string;
    LOGRADOURO: string;
    NUMERO: Number;
    COMPLEMENTO: string;
    BAIRRO: string;
    CIDADE: string;
    UF: String;
    Pedidos: Pedidos;
}
