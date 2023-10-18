let w = window.innerWidth;
let h = window.innerHeight;
let x = document.getElementById("ex");
x.innerHTML = "Largura: " + w + "<br>" + "Altura: " + h;

function abrirJanela() {
    novaJanela = window.open("", "novaJanela", "width=200, height=200");
    novaJanela.document.write("<p> Uma nova janela foi criada </p>");
}

function fecharJanela(){
    novaJanela.close();
}

/* AS INFO DO NAVIGATOR NÃO SÃO PRECISAS
navigator.appCodeName
navigator.appName
navigator.appVersion
navigator.userAgent (O ÚNICO QUE PRECISA DOS DE CIMA)
navigator.language
navigator.cookieEnabled
navigator.platform
*/

/* 
location.href = 'http://127.0.0.1:3000/Exerc%C3%ADcios%20em%20sala/17-10-2023/index.html'
location.hostname = '127.0.0.1'
location.pathname = '/Exerc%C3%ADcios%20em%20sala/17-10-2023/index.html'
location.protocol = 'http:'
location.hash = ''
location.port = '3000'
location.assign()
location.reload()
*/

/* 
screen.availHeight = 720
screen.availWidth = 1366
screen.colorDepth = 24
screen.height = 768
screen.width = 1366
screen.pixelDepth = 24
*/

/* 
history.back()
history.forward()
history.go(-1)
history.length = 4
*/



