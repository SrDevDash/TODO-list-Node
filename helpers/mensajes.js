import colors from 'colors';
import inquirer from 'inquirer';
import readline from 'readline';

const mostrarMenu = () => {

    return new Promise(resolve => {



        console.clear();
        console.log('======================'.green);
        console.log(' Selecione una opcion'.green);
        console.log('======================\n'.green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listartareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tarea pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tareas`);
        console.log(`${'0.'.green} Salir \n`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readLine.question('Seleccione una opcion:  ', (e) => {
            readLine.close();
            resolve(e);
        });
    });
}


const pausa = async() => {
    console.log('\n');
    await inquirer.prompt(pausaQ);
    console.log('\n');
}

const pausaQ = {
    type: 'input',
    name: 'enter',
    message: `Press ${'Enter'.green} to continue`,

}


export{pausa}