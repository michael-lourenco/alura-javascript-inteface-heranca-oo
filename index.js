import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, "123.456.789-10");
diretor.cadastrarSenha("123456799");
const gerente = new Gerente("João", 5000, "987.654.321-10");
gerente.cadastrarSenha("123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456789");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456799");

const cliente = new Cliente("João", "123.456.789-10", "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);