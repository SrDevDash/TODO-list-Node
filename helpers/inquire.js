import inquirer from 'inquirer';

import colors from 'colors';


const questions = [
    {
        type: 'list',
        name: 'opt',
        message: 'Que desea hacer?',
        choices: [
            {
                name: `${'1.'.green} Crear tarea`,
                value: 1
            },
            {
                name: `${'2.'.green} Listar tareas`,
                value: 2
            },
            {
                name: `${'3.'.green} Listar tareas completadas`,
                value: 3
            },
            {
                name: `${'4.'.green} Listar tarea pendientes`,
                value: 4
            },
            {
                name: `${'5.'.green} Completar tarea(s)`,
                value: 5
            },
            {
                name: `${'6.'.green} Borrar tareas`,
                value: 6
            },
            {
                name: `${'0.'.green} Salir \n`,
                value: 0
            },
        ]
    }
]



const inquererMenu = async () => {

    console.clear();
    console.log('======================'.green);
    console.log(' Selecione una opcion'.green);
    console.log('======================\n'.green);

    const {opt} = await inquirer.prompt(questions);

    return opt;
}

const leerInput = async(message) => {

    const question = [
        {        
            type: 'Input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingresar un valor';
                }else{
                    return true;
                }
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);

    return desc;
}

const listTaskDelete = async(tareas = []) => {


    const choices = tareas.map((tarea,i) => {
        const index = `${i + 1}`.green;
        return {
            value: tarea.id,
            name: `${index}. ${tarea.desc}  :: ${tarea.completadoEn}`
        }
    });

    choices.unshift({
        value: 0,
        name: `0.`.green + 'Cancelar'
    })
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];

    const {id} = await inquirer.prompt(preguntas);

    return id;

}

const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question);

    return ok;
}

const listTaskToCheck = async(tareas = []) => {


    const choices = tareas.map((tarea,i) => {
        const index = `${i + 1}`.green;

        return {
            value: tarea.id,
            name: `${index}. ${tarea.desc}  :: ${tarea.completadoEn}`,
            checked: tarea.completadoEn ? true : false
        }

    });

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ];

    const {ids} = await inquirer.prompt(preguntas);

    return ids;

}

export { inquererMenu,leerInput,listTaskDelete,confirmar,listTaskToCheck }