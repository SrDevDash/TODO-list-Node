import {uid} from 'uid';

export default class Task {
    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc ) {

        this.id = uid(22);
        this.desc = desc;
        this.completadoEn = null;

    }
}



