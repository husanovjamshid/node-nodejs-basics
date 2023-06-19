import { copyFile } from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const copy = async () => {
    copyFile(
        path.join(path.join(__dirname), './files/fresh.txt'),
        path.join(path.join(__dirname), './files/copy.txt'),
        (err, data) => {
            console.log(err);
            console.log(data);
        },
    );
};

await copy();
