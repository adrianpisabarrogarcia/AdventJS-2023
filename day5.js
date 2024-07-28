function cyberReindeer(road, time) {
    let roadArray = road.split('');
    let position = road.indexOf('S');
    let result = [road]; // Incluir el estado inicial

    for (let t = 1; t <= time; t++) {
        // Abrir las barreras después de 5 unidades de tiempo
        if (t === 5) {
            for (let i = 0; i < roadArray.length; i++) {
                if (roadArray[i] === '|') {
                    roadArray[i] = '*';
                }
            }
        }

        // Mover a Santa si no hay barrera cerrada adelante
        if (position + 1 < roadArray.length && roadArray[position + 1] !== '|') {
            roadArray[position] = '.';
            position++;
            roadArray[position] = 'S';
        }

        // Agregar el estado actual de la carretera al resultado
        result.push(roadArray.join(''));
    }

    return result;
}

// Ejemplo de uso
const road = 'S..|...|..';
const time = 10;
console.log(cyberReindeer(road, time));
