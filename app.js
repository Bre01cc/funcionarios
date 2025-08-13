'use script'

import Funcionarios from './funcionarios.json' with{type:"json"}




function cardPerfil(funcionario){
    const galeria = document.getElementById('galeria')

    const perfil = document.createElement('div')
    perfil.classList.add('perfil')

    const nomeTech = document.createElement('h2')
    const setorText = document.createElement('p')
    const imgPerfil = document.createElement('img')

    imgPerfil.src=funcionario.imagem
    nomeTech.textContent=funcionario.nome
    setorText.textContent =funcionario.cargo

    perfil.appendChild(imgPerfil)
    perfil.appendChild(nomeTech)
    perfil.appendChild(setorText)

    galeria.appendChild(perfil)

}
function carregarDados(){
    Funcionarios.forEach(cardPerfil)
}
carregarDados()


    
