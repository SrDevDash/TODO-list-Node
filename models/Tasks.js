import colors from 'colors';
import  Task  from "./Task.js";


export default class Tasks {

    _listado = {};

    constructor(){
        this._listado = {};
    }

    deleteTaskByID(id = ''){

        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    createTask(desc = ''){

        const task = new Task(desc);

        this._listado[task.id] = task;
    }

    get listArray(){

        const list = [];

        Object.keys(this._listado).forEach(key => {
            const task = this._listado[key];
            list.push(task);    
        })

        return list;
    }

    loadTaskFromBD(tasks = []){
        tasks.forEach( task => {
            this._listado[task.id] = task;
        });
    }

    listTasks(){
        console.log('\n');
        const tasksArr = this.listArray;
        let count = 1;

        tasksArr.forEach((task) => {

            const final = task.completadoEn ? 'Completado'.green : 'Pendiente'.red;
            const ini = task.completadoEn ? count.toString().green : count.toString().red;
            
            console.log(`${ini} ${task.desc} :: ${final}`);

            count++;
        });
    }

    listTasksByAction(Done = true){
        console.log('\n');

        // filtar el array con tareas completadas o pendientes
        const tasksNew = Done 
        ? this.listArray.filter(task => task.completadoEn != null ) 
        : this.listArray.filter(task => task.completadoEn == null );

        // imprimir en consola las tareas que recogimos anteriormente
        tasksNew.forEach((task,i) => {
            const indexN = i + 1;
            const final = task.completadoEn ? 'Completado'.green : 'Pendiente'.red;
            const ini = task.completadoEn ? indexN.toString().green : indexN.toString().red;

            console.log(`${ini} ${task.desc} :: ${final}`);
        });

        console.log('\n');
    }

    completarTarea(ids = []){
        this.listArray.map(
            task => {
                ids.includes(task.id) ? task.completadoEn = new Date() : task.completadoEn = null;
            }
        )
    }
}
