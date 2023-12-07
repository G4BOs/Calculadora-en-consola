/*Variables*/ 


/*Constantes*/

const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById ('error');
const FLU = document.getElementById ('flu');
const MAN = document.getElementById ('man')

/*Calculo*/
function calcFlujo(peso)
{if (peso <= 10) {VolumenDiario=peso * 100; console.log("Volumen Diario es", VolumenDiario, "cc");
Mantenimiento= VolumenDiario/24;
console.log("Mantenimiento:",Mantenimiento,"cc/h");
Mxm2=Mantenimiento*1.5;console.log("MxM/2:",Mxm2,"cc/h");}

else if (peso <= 20){VolumenDiario= 1000 + (peso - 10) *50;console.log("Volumen Diario es ",VolumenDiario,"cc");
Mantenimiento= VolumenDiario/24;
console.log("Mantenimiento:",Mantenimiento,"cc/h");
Mxm2=Mantenimiento*1.5;console.log("MxM/2:",Mxm2,"cc/h");}

else if (peso <= 30){VolumenDiario = 1500 + (peso - 20) *20;
console.log("Volumen Diario es",VolumenDiario,"cc");
Mantenimiento= VolumenDiario/24;
console.log("Mantenimiento:",Mantenimiento,"cc/h");
Mxm2=Mantenimiento*1.5;console.log("MxM/2:",Mxm2,"cc/h");
}


else if (peso > 30){SuperficieCorporal = ((peso*4)+7)/(peso+90); console.log("Superficie Corporal es",SuperficieCorporal); console.log("SC x 1500:",SuperficieCorporal*1500, "SC x 2000:",SuperficieCorporal*2000)}
}

/*Event*/
CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value;
    if (DATO > 0){
        ERROR.style.display = 'none';
        let VolumenDiario = calcFlujo(DATO);
    } else {
        ERROR.style.display = 'block';
    }
})

