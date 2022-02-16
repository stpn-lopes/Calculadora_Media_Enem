// aprendendo a funcionalidade de variavel, constante e console.log criando uma calculadora da media do enem por alerts


//primeiro declaramos as variaveis e constante, se houver
// o escopo de var é global e local 
// o escopo de let é local
// const necessita de um valor inicial e não pode ser alterado

function start () {
    // declarando os campos de memoria que serão usados paara receber diversos valores
    var nome, sobrenome, nota1, nota2, nota3, nota4, nota5, media ;

    window.alert("Descubra sua média do Enem:");
    //pedindo o nome e sobrenome
    
    window.alert ("Primeiro, diga seu primeiro nome");
    nome = window.prompt ('Digite seu primeiro nome');
    console.log (nome);
    
    window.alert("Agora nos diga seu sobrenome");
    sobrenome = window.prompt ('Digite seu sobrenome');
    console.log (sobrenome);

    window.alert (nome + " " + sobrenome + ", vamos ao calculo!");

    
    //pedindo os valores ao usuario
    window.alert("Digite sua nota de matemática e suas tecnologias");
    nota1 = Number (window.prompt ('Digite um valor para nota1'));
    console.log(nota1);

    window.alert ("Digite sua nota de Ciências Humana e suas Tecnologias");
    nota2 = Number (window.prompt ('Digite um valor para nota2'));
    console.log(nota2);

    window.alert ("Digite sua nota de Linguagens e suas Tecnologias");
    nota3 = Number (window.prompt ('Digite um valor para nota3'));
    console.log(nota3);

    window.alert ("Digite sua nota de Ciências Biologicas e suas tecnologias");
    nota4 = Number (window.prompt ('Digite um valor para nota4'));
    console.log(nota4);
    
    window.alert ("Digite sua nota de Redação");
    nota5 = Number (window.prompt ('Digite um valor para nota5'));
    console.log(nota5);

    // dando o valor a variavel media
    media = (nota1 + nota2 + nota3 + nota4 + nota5)/5;
    console.log(media);

    //mostrar a media
    window.alert ("Aqui está sua média" + " " + nome + " " + sobrenome);
    window.alert ("Sua media é" + " " + media);
};
 
start();

