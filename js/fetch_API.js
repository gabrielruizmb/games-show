const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '756224436cmsh60d57eed64064e9p155bb6jsn5bbadf6424cb'
    }
};
fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, options)//api do site 
    .then(response => response.json())//arquivos para json
.then((completedata) => {
    games = completedata;
    loadGames()//funcao dos jogos 
}).catch((erro) => {//tratamento de erro
    console.log(erro);
})

let games = [];//recebe o filter
//let jogos = []; 
let category;
let platform, platALL;
function changeCategory (newCategory) {
    category = newCategory;
    loadGames()
}
function changeplatform(newplatform){
    platform = newplatform;
    loadGames()
}
/*function changeplatform1(newplatform2){
    platALL = newplatform2;
    loadGames()
}*/

function loadGames() { //funcao faz aparecer os jogos na tela 
    let data1 = ""; //variavel como string vazia
    
    games.filter(game => {
        if (!category) return true; 
        if(!platform) return true;
        //if(!platALL) return true;
        if (game.genre.includes(category)){
            if(game.platform.includes(platform)){ 
            genre = platform;    
    
            return true;
        }//return true se o botao for clicado. filtra os dados com o batao clicado
    }
    
    
    
    //if(game.platform.includes(platform)) return true;
    //if(game.genre.platform.includes(category)) return true;
    })
    
    .forEach((values) => {//roda um arrey retornando vazio
        data1 += `<div class="cartao1"> <a href="${values.freetogame_profile_url}"> 
            <img src="${values.thumbnail}" alt="imagem" class="img">
           <h1 class="titulo">${values.title}</h1>
           <p>Genero: ${values.genre}</p>
           <p>Plataforma: ${values.platform}</p>
           </div></a>`//data1 += organiza como vai aparecer na tela 
        })
        

        document.getElementById('cartao').innerHTML = data1;//pega id catao e passa os elementos de data1
    }

/*async function PegarPC(){//funcao para relacionar os menus

 return await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));    
}*/
