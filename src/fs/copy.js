import { copyFile } from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const copy = async () => {
   try {
    copyFile(
        path.join(path.join(__dirname), './files/fresh.txt'),
        path.join(path.join(__dirname), './files/copy.txt'),
        (err, data) => {
            if(err){
                throw new Error('FS operation failed')
            }
            console.log(data);
        },
    );
   } catch (error) {
    
   }
};

await copy();
