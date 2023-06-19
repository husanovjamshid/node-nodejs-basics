import { readFile } from 'fs';
import { createHash } from 'crypto';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const calculateHash = async () => {
    const pathFile = path.join(path.join(__dirname), './files/fileToCalculateHashFor.txt');
    const files =  readFile(pathFile, 'utf-8', (err) => {
        if(err) {
            console.log(err);
        }
    });

    const hash = createHash('sha256');
    hash.update(files);

    console.log(hash.digest('hex'));
};

await calculateHash();