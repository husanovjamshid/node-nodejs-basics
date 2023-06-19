const parseArgs = () => {
    const argument = process.argv.slice(2);
    const argumentFormat = argument
        .map((arg, index, arr) => {
            let str = '';

            if (arg.includes('--')) {
                arg.replace('--', '');
                str = `${arg.replace('--', '')} is ${arr[index + 1]}`;
            }

            return str;
        })
        .filter(Boolean);

    console.log(argumentFormat.join(', '));
};

parseArgs();