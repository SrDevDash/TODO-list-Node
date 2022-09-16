import { confirmar, inquererMenu, leerInput, listTaskDelete, listTaskToCheck } from './helpers/inquire.js'
import { pausa } from './helpers/mensajes.js';


import Tasks from './models/Tasks.js';
import { guardarDB, readDB } from './helpers/guardarArchivo.js';
const main = async () => {

    let otp = '';


    const tasks = new Tasks();

    const tasksDB = readDB();

    if (tasksDB) {
        tasks.loadTaskFromBD(tasksDB);
    }

    await pausa();

    do {
        // Imprime el menu
        otp = await inquererMenu();

        switch (otp) {
            case 1:
                const desc = await leerInput('Description');
                tasks.createTask(desc);
                break;
            case 2:
                tasks.listTasks();
                break;
            case 3:
                tasks.listTasksByAction(true);
                break;
            case 4:
                tasks.listTasksByAction(false);
                break;
            case 5:
               const ids =  await  listTaskToCheck(tasks.listArray);
               tasks.completarTarea(ids);
                break;
            case 6:
                const id = await listTaskDelete(tasks.listArray);
                if (id !== 0) {


                    const ok = await confirmar('Estas seguro de borrarlo?');

                    if (ok) { tasks.deleteTaskByID(id); console.log(`Mensaje borrado correctamente`.gray) }
                }
                break;
            default:

                break;
        }

        guardarDB(tasks.listArray);

        await pausa();
    }
    while (otp !== 0);


}

main();