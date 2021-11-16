
let nombrePlanetas = ['Tierra','Marte']
let distancia = [5,3,'67']
const tamaño = []

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)

/*let i=0;
while (i <= nombrePlanetas.length - 1) {
    console.log(i)
    console.log(nombrePlanetas[i]);
    i = i + 1
}

for (let index = 0; index < nombrePlanetas.length; index++) {
    console.log(nombrePlanetas[index]);
}

for (const planeta of nombrePlanetas) {
    console.log(planeta)
}*/

for (const key in nombrePlanetas) {
    console.log(nombrePlanetas[key])
    
}

for (const key in distancia) {
    if (distancia[key] == '5') {
        console.log('Se encontró la distancia')
    } else {
        console.log('No se encontró la distancia')
    }   
}

nombrePlanetas.forEach((value,index,array) => {
    console.log('planeta',index,value)
});
