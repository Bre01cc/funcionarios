'use script'

import Funcionarios from './funcionarios.json' with{type:"json"}

const galeria = document.getElementById('galeria')
const perfil = document.getElementById('perfil')

const nome = Funcionarios.map(func=>func.nome)

console.log(nome)

    
