import { existsSync, writeFile } from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
    try {
        if (!existsSync(path.join(__dirname, './files/fresh.txt'))) {
            writeFile(path.join(__dirname, './files/fresh.txt'), 'I am fresh and young', (err) => {
               console.log('file created');
            });
        } 
        else {
            throw new Error(`it's Already`)
        }
    } catch (error) {
        console.log(error.message);
    }
};

await create();