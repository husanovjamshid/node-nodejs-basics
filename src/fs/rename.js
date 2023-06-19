import {join} from 'path'
import fs from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
    try {
        fs.rename(
            join(join(__dirname), './files/wrongFilename.txt'),
            join(join(__dirname), './files/properFilename.md'),
            (err) => {
                if(err) {
                   throw new Error(err)
                }
            },
        );
    } catch (err) {
        console.log(err.message);
    } 
};

await rename();