
let nombrePlanetas = ['Tierra','Marte']
let distancia = [5,3,'67']
const tamaño = []

for (const planeta of nombrePlanetas) {
    console.log(planeta)
}

for (const key in distancia) {
    if (distancia[key] == '5') {
        console.log('Se encontró la distancia')
    } else {
        console.log('Nose encontró la distancia')
    }
    
}