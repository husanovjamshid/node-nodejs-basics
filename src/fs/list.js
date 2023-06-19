import {join} from 'path'
import fs from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const list = async () => {
    try {
        fs.readdir(join(join(__dirname)), (error, files) => {
            if (error) {
                throw new Error('FS operation failed');
            } else {
                console.log(files);
            }
        });
        
    } catch (err) {
        console.log(err.message);
    } 
};

await list();