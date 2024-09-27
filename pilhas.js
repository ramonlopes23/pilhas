let pilha_prato = [];
pilha_prato.push("prato laranja")
pilha_prato.push("prato verde")
pilha_prato.push("prato azul")
pilha_prato.push("prato vermelho")

let tam = pilha_prato.length;
console.log("O tamanho da pilha é "+tam)

let vazia = pilha_prato.length == 0;
console.log("A pilha esta vazia: "+vazia);

let topo = pilha_prato[pilha_prato.length-1]
console.log("o elemento do topo é "+topo);

let rem = pilha_prato.pop();
console.log("o elemento removido é "+rem);

for(let i=pilha_prato.length-1;i>=0;i--){
    console.log(pilha_prato[i]);
}

