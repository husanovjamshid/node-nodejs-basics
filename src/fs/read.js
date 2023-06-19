import fs from 'fs';
import { join } from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
   try {
    fs.readFile(join(join(__dirname), './files/fileToRead.txt'), "utf-8", (error, data) => {
        if (error) {
            throw new Error('FS operation failed');
        } else {
            console.log(data.toString());
        }
    }); 
   } catch (error) {
    console.log(error.message);
   }
};

await read();