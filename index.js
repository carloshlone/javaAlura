import { Cliente } from './Cliente.js'
import { Gerente } from './funcionarios/Gerente.js'
import { Diretor } from './funcionarios/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const diretor = new Diretor('Rogrido, 10000, 123456')
diretor.cadastrarSenha('123456')
const gerente = new Gerente('Ricardo, 5000 , 12378945601')
gerente.cadastrarSenha('123')

const cliente = new Cliente('Giovanna', 1112233344, '456')
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456')
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123')
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456')

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)
