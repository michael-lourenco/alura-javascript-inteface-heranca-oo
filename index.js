import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1,1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);


const contaPoupanca = new ContaPoupanca(500, cliente1, 1001);
contaPoupanca.sacar(50);
console.log(contaPoupanca)
console.log(contaCorrenteRicardo);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(1000);
contaSalario.sacar(100);

console.log(contaSalario);