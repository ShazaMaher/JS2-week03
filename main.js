
const btn = document.querySelector('#search');
const input = document.querySelector('#inputText');

btn.addEventListener('click',function(){
    debugger;
    console.log(input.value);
    const searchTerm = input.value;
    let iputIsNotEmpty=handleInput(searchTerm);
    if(iputIsNotEmpty){
        searchHYFReps(searchTerm);
    }
});

function handleInput(input){
    if(input === ""){
        window.alert("please add he value that you want to search for:-)!");
        console.log("the feild input is empty");
        return false;
    }
    return true;
}
/*function httpGetAsync(theUrl, callback){
    const xmlHttp = new XMLHttpRequest();
     xmlHttp.onreadystatechange = function(){
         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
     }
     xmlHttp.open("GET", theUrl, true);
     xmlHttp.send(null);
}*/

function fetchJSONData(url, callbackFn){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',function(){
        console.log("Data loaded.");
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
    });
    xhr.open('GET', url);
    xhr.send();
}

let searchIthemISExist=false;
function searchHYFReps(searchTerm){
    const url ="https://api.github.com/search/repositories?q=user:HackYourFuture+" + searchTerm;
    const ul = document.querySelector('#reposList');
    ul.innerHTML = '';
    fetchJSONData(url,function(searchResult){
        console.log(searchResult);
     for(const repo of repoList){
         if(searchTerm===repo.name)
         {
            searchIthemISExist=true;
         }
         if(searchIthemISExist)
         {
             searchResult.push(repo);
         }
     }
     for(const repoResult of searchResult){
        const ul=document.querySelector('#reposList');
        const li = document.createElement('li');
        ul.appendChild(li);    
        li.innerHTML =`<a target="_blank" href="${repoResult.url}">${repoResult.name}</a>`;
     }
});
}

function renderReposioties(repositories){
    
}
