// JAVASCRIPT FILE 

  /*
  Ana Leite | up201808111
  WD2 | Projeto 1 - 03.11.2021
  */

console.log ('is that coOKie?');


// BODY _____________________________________________________

// SCROLL HORIZONTAL ________________________________________
let main = document.querySelector("main");

  // à escuta do "wheel" 
  window.addEventListener("wheel", function (e) {
    // se a janela for rolada verticalmente (delyaY), faz scroll para "Left" do "main"
    if (e.deltaY > 0) main.scrollLeft += 50;
    else main.scrollLeft -= 50;
   
    // lê a posição do scrollLeft
    console.log (main.scrollLeft);
    // lê a largura total do scroll
    console.log (main.scrollWidth);

    var scrollMain = main.scrollLeft;
    var scrollWidth = main.scrollWidth;
    
    //relação entre scroll main e scroll total --> scrollMain=scrollWidth-(scrollWidth/9) --> (9 sections) ;


    // STICKY ELEMENTS ________________________________________
    let s1 = document.querySelector('.s1');
    let s2 = document.querySelector('.s2');
    let s3 = document.querySelector('.s3');
    let s4 = document.querySelector('.s4');
    let s8 = document.querySelector('.s8');


    /* Experimentei primeiro trabalhar com a position:relative e position:absolute de cada elemento, mas criava o problema de os outros elementos continuarem o scroll por trás dos position:absolute. 
    Além disso, tinha de criar uma condição para o intervalo de "sticky" de cada elemento
    Descobri, então a position:-webkit-sticky; position: sticky; no CSS
    (https://mastery.games/post/position-sticky/#Absolute-Positioning)

    if(scrollMain <= (scrollWidth/9)*3.4) {
      s1.style.position = `absolute`; 
    } else {
      stickyCookies.style.position = `relative`; 
    }

    if( scrollMain >= (scrollWidth/9) && scrollMain <= (scrollWidth/9)*3) {
      s2.style.position = `absolute`; 
    }  else {
      s2.style.position = `relative`; 
    }
      
    if( scrollMain >= (scrollWidth/9)*2 && scrollMain <= (scrollWidth/9)*3) {
      s3.style.position = `absolute`; 
    } else {    
      s3.style.position = `relative`; 
    }

    if( scrollMain >= (scrollWidth /9.5)*3 && scrollMain <= (scrollWidth/9)*3) {
      s4.style.position = `absolute`; 
    } else {
      s4.style.position = `relative`; 
    }
    */


    // se o scroll for até a aprox. 1/3 da página (3.4) --> add sticky
    if(scrollMain <= (scrollWidth/9)*3.4) {

      s1.classList.add("sticky");
      s2.classList.add("sticky");
      s3.classList.add("sticky");
      s4.classList.add("sticky");

      // se ultrapasssar esse ponto do scroll --> sticky remove
    }  else {
      s1.classList.remove("sticky");
      s2.classList.remove("sticky");
      s3.classList.remove("sticky");
      s4.classList.remove("sticky");
    }
    
    if( scrollMain >= (scrollWidth /9.5)*7.2 ) {
      s8.classList.add("sticky");
    } else {
      s8.classList.remove("sticky");
    }



    // CHANGE BACKGROUND IMAGE _______________________________________
    const bg = document.querySelector("body");

    if( scrollMain < (scrollWidth /9) * 3.4) {
      bg.style.backgroundImage = "url('./images/bg-image.png')";
    } 

    if( scrollMain >= (scrollWidth /9) * 3.4) {
      bg.style.backgroundImage = "url('./images/bg-image-1.png')";
    } 

    if( scrollMain >= (scrollWidth /9) * 5) {
      bg.style.backgroundImage = "url('./images/bg-image-2.png')";
    } 

    if( scrollMain >= (scrollWidth /9) * 6) {
      bg.style.backgroundImage = "url('./images/bg-image-3.png')";
    } 


  });





// SECTION 1 _____________________________________________________

// TEXT TYPING 
let i = 0;
let txt = 'https://ww';
let speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("site").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


// SECTION 2 _____________________________________________________

/*
//BOTÃO - MUDAR FONTE (não usado)
let a;
let t = document.getElementById("transform");

function change() {

  if (a==1) {
    t.style.fontFamily= 'SpaceG';
    return a=0;
  }
  else {
    t.style.fontFamily= 'comic sans';
    return a=1;
  }

}
*/



// SECTION 3 ________________________________________________________

// PRIVACY PARAGRAPH
// texto parágrafo + string
const msg = document.getElementById('privatemessage');
const ptxt = msg.textContent;

// remover texto e substituir
msg.remove();
const container = document.createElement('section');

// cada letra do texto
for(let i = 0; i < ptxt.length; i++) {

  // espaço para cada letra
  const tel = document.createElement('span');

  // atribui classes
  tel.classList.add("letter");

  // coloca texto dentro do novo espaço
  const teltxt = document.createTextNode(ptxt[i]);
  tel.appendChild(teltxt);
  // insere na section
  container.appendChild(tel);

}

// section para texto
const page = document.getElementById('private');
// colocar filho na secção
page.appendChild(container);

// obter lista de todas as letras
const ltrs = document.querySelectorAll('.letter');

// percorrer lista de letras + atribuir comportamento
ltrs.forEach(function(el) {
  el.addEventListener('mouseover', changeText);
});


// definir o comportamento
function changeText(e) {

  e.target.style = 'transition';
  let eltxt = e.target.textContent;
  eltxt = eltxt.toLowerCase();
  if(eltxt == 'a' || eltxt == 'e' || eltxt == 'i' || eltxt =='o' || eltxt == 'u') {
    // substiyui por *
    e.target.innerText=("*");
  }
}


/*
// SHOW ON MOUSE HOVER - TRANSPARENCY (não usado)
let transp = document.getElementById("transparency");

transp.addEventListener('mouseenter' , () => transp.innerText = "<p> transparency </p> ");
transp.addEventListener('mouseleave' , () => transp.innerText = "transparency ");


// SHOW ON MOUSE HOVER - PRIVACY
let priv = document.getElementById("privacy");

priv.addEventListener('mouseenter' , () => priv.innerText = "privacy ");
priv.addEventListener('mouseleave' , () => priv.innerText = "******* ");
*/



// SECTION 5 _____________________________________________________

// TEXT TYPING - COOKIES  
let c = 0;
let d = 0;
let txtC = 'co';
let txtC2 = 'ies';
let speedC = 300;

function typeWriterC() {
  if (c < txtC.length) {
    document.getElementById("cookies1").innerHTML += txtC.charAt(c);
    c++;
    setTimeout(typeWriterC, speedC);
  }

  if (d < txtC2.length) {
    document.getElementById("cookies2").innerHTML += txtC2.charAt(d);
    d++;
  }
}



