import fs from 'fs';

const archivo = './db/data.json';

const guardarDB = (data) => {

    const dataFormat = JSON.stringify(data).replace(']',"]\n");
    fs.writeFileSync(archivo,dataFormat);
}


const readDB = () => {

    if(!fs.existsSync(archivo)){
        return null
    }

    const info = fs.readFileSync(archivo,{encoding: 'utf-8'});
    const data = JSON.parse(info);

    return data;
}

export {guardarDB,readDB};