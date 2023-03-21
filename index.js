let menu = document.querySelector(".icon-menu")
menu.addEventListener("click", abrirMenu)
                      

function abrirMenu(){


  let itensMenu = document.querySelector("#itens-menu")

   itensMenu.style.display = 'block' 
 
}
 
function fecharMenu() {
   let itensMenu = document.querySelector("#itens-menu")

   itensMenu.style.display = 'none'
   
}




let informations = [
    {
        nome: "Dennis Lynn Rader",
        cpfconfirm: "107.478.210-63",
        ficha: "./Serial Killers2.html"
    },

    {
        nome: "Theodore Robert Bundy",
        cpfconfirm: "740.895.215-74",
        ficha: "./Serial Killers3.html"
    },

    {
        nome: "Charles Milles Manson",
        cpfconfirm: "857.652.413-27",
        ficha: "./Serial Killers4.html"
    },

    {
        nome: "Ricardo Leyva Muñoz Ramírez",
        cpfconfirm: "210.796.367-07",
        ficha: "./Serial Killers5.html"
    },

    {
        nome: "Dennis Andrew Nilsen",
        cpfconfirm: "760.876.087-98",
        ficha: "./Serial Killers6.html"
    },

    {
        nome: "Jeffrey Lionel Dahmer",
        cpfconfirm: "654.765.769-89",
        ficha: "./Serial Killers7.html"
    },

    {
        nome: "John Wayne Gacy",
        cpfconfirm: "345.902.169-23",
        ficha: "./Serial Killers8.html"
    },

    {
        nome: "Lázaro Barbosa de Sousa",
        cpfconfirm: "564.167.876-34",
        ficha: "./Serial Killers16.html"
    },

    {
        nome: "Gary Leon Ridgway",
        cpfconfirm: "546.793.907-47",
        ficha: "./Serial Killers9.html"
    },

    {
        nome: "Aileen Carol Pittman",
        cpfconfirm: "873.678-149-69",
        ficha: "./Serial Killers10.html"
    },

    {
        nome: "Herman Webster Mudgett",
        cpfconfirm: "679.897.547-21",
        ficha: "./Serial Killers1.html"
    },

    {
        nome: "Mary Ann Cotton",
        cpfconfirm: "797.548.085-34",
        ficha: "./Serial Killers11.html"
    },

    {
        nome: "Amelia Elizabeth Dyer",
        cpfconfirm: "645.491.890-62",
        ficha: "./Serial Killers12.html"
    },

    {
        nome: "Mary Pearcey",
        cpfconfirm: "238.389.753-80",
        ficha: "./Serial Killers13.html"
    },

    {
        nome: "Francisco de Assis Pereira",
        cpfconfirm: "869.690.537-25",
        ficha: "./Serial Killers14.html"
    },

    {
        nome: "Dyonathan Celestrino",
        cpfconfirm: "975.278.075",
        ficha: "./Serial Killers15.html"
    }
]

//lendo o conteudo do navegador 

let nomepag2 = localStorage.getItem('usuarioLogado')
// alert(nomepag2)





function enviar() {


    let user = document.querySelector('input#text').value
    let cpf = document.querySelector('input#cpf').value

    let controle = 0

    for (let i = 0; i < informations.length; i++) {
        if ((user == informations[i].nome) && (cpf == informations[i].cpfconfirm)) {
            alert(`O nome ${user}, CPF ${cpf}, foi encontrado e sua posição na lista criminal é ${i + 1}.`)
            window.location.assign(`${informations[i].ficha}`)
            i = informations.lenght
            controle = 1


        }
        // else if(i==nome.lenght-1){
        //     alert(`O nome ${user} não está na lista criminal`) 
        // }
        else if ((user == informations[i].nome) && (cpf != informations[i].cpfconfirm)) {
            alert(`O nome ${user}, CPF ${cpf}, foi encontrado, porém o CPF é inválido. Verifique a informação para ter acesso a ficha criminal.`)
            i = nome.lenght
            controle = 1
        }
    }

    if (controle == 0) {
        alert(`O nome ${user}, CPF ${cpf} não está na lista criminal.`)
    }
}



    function mostarSenha(){
        
        let password = document.querySelector("#senha")
        let mostrar= document.querySelector("#eye")
        if(password.type === 'password'){
        password.setAttribute('type','text')
        mostrar.classList.replace('bi-eye-fill','bi-eye-slash-fill')
        }
        else{
            password.setAttribute('type','password')
            mostrar.classList.replace('bi-eye-slash-fill','bi-eye-fill')
        }
    }

//função e evento para listar todos os assassinos

const deletar1 = document.querySelector("input#deletar")
deletar1.addEventListener("click", deletarusuario1)

//evento para listar todos os assassinos

const listar = document.querySelector("#listar")
listar.addEventListener("click", listarUsuario)



//função e evento para mudar a informação de algum assassino

const substituirInformations = document.querySelector("#mudar")
substituirInformations.addEventListener("click", changeInformations)


const validarInformations = document.querySelector("#validar")
validarInformations.addEventListener("click", validation)



// login detetive page

function teste() {
    let detetiveInformations = [
        {
            detetive: "Sherlock Holmes",
            senha: "12345"
        },

        {
            detetive: "Dr. John Watson",
            senha: "45677"
        },

        {
            detetive: "Allan Pinkerton",
            senha: "56798"
        },

        {
            detetive: "Calvin Goddard",
            senha: "98746"
        }

    ]


    let usuario = document.querySelector('#detetive-name').value
    let password = document.querySelector('#senha').value

    let controle = 0

    for (let i = 0; i < detetiveInformations.length; i++) {
        if ((usuario == detetiveInformations[i].detetive) && (password == detetiveInformations[i].senha)) {
            window.location.assign("detetive.html")
            i = detetive.lenght
            controle = 1

        }

        else if ((usuario == detetiveInformations[i].detetive) && (password != detetiveInformations[i].senha))
            alert(`O  detetive ${usuario}, foi encontrado, porém a senha é inválido. Verifique a informação para ter acesso a central de controles.`)
        i = detetive.lenght
        controle = 1
    }

    if (controle == 0) {
        alert(`O detetive ${usuario}, não está registrado nos nosso dados.`)
    }

}


// detetive central controle


//função para listar todos os assassinos

function listarUsuario() {
    let listaa = document.querySelector('div.lista-aparecer')
    listaa.innerHTML = ""

    listaa.innerHTML += "<strong>Lista de Assassinos<strong><br><br>"
    for (let i = 0; i < informations.length; i++) {

        listaa.innerHTML += `<label>${informations[i].nome}</label>`

    }
}


// função para sair da página de controle e ir para a página inicial
function sairPagina(){
    window.location.assign("index.html")
}

// função para tirar o conteúdo da div listada tela
function limparPagina(){
    let listaa = document.querySelector('div.lista-aparecer')
    listaa.innerHTML =``
}





function adicionarUsuario() {
    let listaa = document.querySelector('div.lista-aparecer')
    listaa.innerHTML += ``
    listaa.innerHTML = ` <form>
    <input type="text" placeholder="Nome" class="adicionarNome" required><br>
    <input type="text" placeholder="CPF" class="adicionarCpf" required><br>
    <input type="submit" value="Adicionar Assassino" class="botao_controles2" id="adicionarAssassino2">
     </form>`


    const adicionar2 = document.querySelector("#adicionarAssassino2")
    adicionar2.addEventListener("click", adicionarAssassino2)
}

function adicionarAssassino2() {
    let novoAssassino = {
        nome: document.querySelector(".adicionarNome").value,
        cpf: document.querySelector(".adicionarCpf").value
    }

    let repetir = 0

    if((nome==" ") ||(cpf==" ")){
        alert("Favor preencher as áreas em branco")
    } else{

    for (let i = 0; i < informations.length; i++) {

        if (informations[i].nome == novoAssassino.nome) {
            repetir = 1
        }
    }


    if (repetir == 0) {
        informations.push(novoAssassino)
        alert("Usuário adicionado com sucesso!")
        listarUsuario()
    }

    else {
        alert("Usuário já existente no cadastro")
        adicionarUsuario()
    }

}
}

function changeInformations() {
    let listaa = document.querySelector('div.lista-aparecer')
    listaa.innerHTML += ``
    listaa.innerHTML = ` <label for="opcoes">Selecione o assassino que você deseja modificar as informações:<br></label>
        <input type="text" placeholder="Nome" name="opções" id="nome-antigo" class="adicionarCpf">
        <input type="text" placeholder="CPF" class="adicionarCpf" id="cpf-antigo"><br>
        <label for="opcoes">Informe os novos dados do assassino selecionado:<br></label>
        <input type="text"placeholder="Novo Nome" name="opções" id="nome-novo" class="adicionarCpf" required>
        <input type="text" placeholder="Novo CPF" class="adicionarCpf" id="cpf-novo" required><br>
        <input type="button" value="Modificar" class="botao_controles2" id="changeInformations2">`

    const substituirInformations = document.querySelector("#changeInformations2")
    substituirInformations.addEventListener("click", changeInformations2)
}

function changeInformations2(){
    
    let nomeAntigo = document.querySelector("#nome-antigo").value
        let cpfAntigo = document.querySelector("#cpf-antigo").value
        let nomeNovo = document.querySelector("#nome-novo").value
        let cpfNovo = document.querySelector("#cpf-novo").value
        let cpfErrado = 1
        let nomeErrado = 0
        let indice = 0

        for (let i = 0; i < informations.length; i++){
            if (informations[i].nome == nomeNovo){
                if(informations[i].nome!= nomeAntigo)
                nomeErrado = 1
            }
            }

            if (nomeErrado==0){
             for (let i = 0; i < informations.length; i++){
                if(informations[i].nome == nomeAntigo){
                    nomeErrado=0
                    if(informations[i].cpfconfirm == cpfAntigo ){
                        cpfErrado=0
                        indice = i
                        index=informations.length
                    }
                }
            
              
             }
            }

    
        if (nomeErrado==0){
             if (cpfErrado == 0){
                let listaa = document.querySelector('div.lista_aparecer')
                listaa.innerHTML += ``
                informations[indice].nome = nomeNovo
                informations[indice].cpfconfirm = cpfNovo
                alert("Dados atualizados com sucesso!")
                listarUsuario()
             }
             else{
                alert("Dados incorretos. Favor verificar.")
                changeInformations()
             }
        }
}



//função para listar todos os assassinos
function deletarusuario1() {
    let listaa = document.querySelector('div.lista-aparecer')
    listaa.innerHTML = ""

    listaa.innerHTML += "<strong>Deletar assassino<strong><br><br>"
    for (let i = 0; i < informations.length; i++) {

        listaa.innerHTML += `<div><input type="checkbox" id="${i}" <label>${informations[i].nome}</label>`

    }
    listaa.innerHTML += ` <div class = "botao_js"><input type="button" value="Deletar" id="deletarusuario2" class="botao-controles" onclick="deletar2()"></div>`


}


//funcao para deletar os usuarios depois da escolha

function deletar2() {
    let deletado = [""]
    for (let i = 0; i < informations.length; i++) {

        let checkbox = document.getElementById(`${i}`)
        if (checkbox.checked == true) {
            deletado[i] = 1
        }
        else {
            deletado[i] = 0
        }

    }

    for (let i = deletado.length - 1; i >= 0; i--) {

        if (deletado[i] == 1) {
            informations.splice(i, 1)
        }

    }
    listarUsuario()
}

    function validation(){
        let listaa = document.querySelector('div.lista-aparecer')
        listaa.innerHTML = ""
        listaa.innerHTML =`<form>
        <label>Validando informações dos Assassinos:</label><br><br>
        <input id="userValidation" type="text" placeholder="Nome" class="adicionarCpf"><br>
        <input id="cpfValidation" type="text" placeholder="CPF" class="adicionarCpf"><br>
        <input type="button" value="Modificar" class="botao_controles2" id="validationInformations2">
    </form>`


    const validarInformations = document.querySelector('#validationInformations2')
    validarInformations.addEventListener('click', validar)
    
    } 

  function validar(){
    let user  = document.querySelector('#userValidation').value
    let cpf = document.querySelector('#cpfValidation').value
    let controle = 0

    for (let i = 0; i < informations.length; i++) {
        if ((user== informations[i].nome) && (cpf == informations[i].cpfconfirm)) {
            alert(`O nome ${user}, CPF ${cpf}, foi encontrado e sua posição na lista criminal é ${i + 1}.`)
            i = informations.lenght
            controle = 1

        }
        else if ((user == informations[i].nome) && (cpf != informations[i].cpfconfirm)) {
            alert(`O nome ${user}, CPF ${cpf}, foi encontrado, porém o CPF é inválido. Verifique a informação para ter acesso a ficha criminal.`)
            i = nome.lenght
            controle = 1
        }
    }

    if (controle == 0) {
        alert(`O nome ${user}, CPF ${cpf} não está na lista criminal.`)
    }
}









// localStorage.removeItem("usuarioLogado")
// window
