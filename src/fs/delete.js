import fs from 'fs';
import { join } from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
   try {
    fs.rm(join(join(__dirname), './files/fileToRemove.txt'), (err) => {
        if(err){
            throw new Error('FS operation failed')
        }
    });
   } catch (error) {
    console.log(error.message);
   } 
};

await remove();