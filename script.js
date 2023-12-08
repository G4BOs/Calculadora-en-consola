/*Variables*/ 
let peso ;
let VolumenDiario ;
let Mantenimiento ;
let Mxm2 ;
let SuperficieCorporal ;
let scx1500 ;
let scx2000 ;
let manredo ;
let sc1500redo;
let sc2000redo;

/*Calculo*/
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const VOLUMENDIARIO = document.getElementById('voldia');
const MANTENIMIENTO = document.getElementById('man');
const MMANTENIMIENTO = document.getElementById('mman');
const SCX1500 = document.getElementById('scx1500');
const SCX2000 = document.getElementById('scx2000');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value;

    if (DATO>0) {ERROR.style.display='none';
    VOLUMENDIARIO.style.display='block';
    MANTENIMIENTO.style.display='block';
    MMANTENIMIENTO.style.display='block';
    

    if(DATO<=10){VolumenDiario = 100*DATO ;VOLUMENDIARIO.innerHTML= VolumenDiario+"cc";
        Mantenimiento = VolumenDiario / 24 ;Mxm2 = Mantenimiento * 1.5; MMANTENIMIENTO.innerHTML= Mxm2+"cc/hr";
        SCX1500.style.display='none';SCX2000.style.display='none';
        manredo=Mantenimiento.toFixed(2);MANTENIMIENTO.innerHTML = manredo+"cc/hr";}

        else if(DATO<=20) {VolumenDiario = 1000+((DATO-10)*50);VOLUMENDIARIO.innerHTML=VolumenDiario+"cc";Mantenimiento = VolumenDiario / 24 ;manredo=Mantenimiento.toFixed(2); MANTENIMIENTO.innerHTML= manredo+"cc/hr";
        Mxm2 = Mantenimiento * 1.5; MMANTENIMIENTO.innerHTML= Mxm2+"cc/hr";
        SCX1500.style.display='none';SCX2000.style.display='none';}

        else if(DATO<=30){VolumenDiario=1500+((DATO-20)*20);VOLUMENDIARIO.innerHTML=VolumenDiario+"cc";Mantenimiento = VolumenDiario / 24 ;manredo=Mantenimiento.toFixed(2); MANTENIMIENTO.innerHTML= manredo+"cc/hr";
        Mxm2 = Mantenimiento * 1.5; MMANTENIMIENTO.innerHTML= Mxm2+"cc/hr";
        SCX1500.style.display='none';SCX2000.style.display='none';}

        else if(DATO>30){SuperficieCorporal = ((DATO*4)+7)/(DATO+90);
        scx1500=SuperficieCorporal*1500;scx2000=SuperficieCorporal*2000;
        sc1500redo=scx1500.toFixed(2);
        sc2000redo=scx2000.toFixed(2);

        SCX1500.innerHTML="SC x1500: "+sc1500redo;SCX2000.innerHTML="SC x2000: "+sc2000redo;
        
        VOLUMENDIARIO.style.display='none';
    MANTENIMIENTO.style.display='none';
    MMANTENIMIENTO.style.display='none';
    SCX1500.style.display='block';
    SCX2000.style.display='block';

        }


}



    else { 
        ERROR.style.display='block';
        VOLUMENDIARIO.style.display='none';
    MANTENIMIENTO.style.display='none';
    MMANTENIMIENTO.style.display='none';
    SCX1500.style.display='none';
    SCX2000.style.display='none';


}


})
