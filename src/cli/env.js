const parseEnv = () => {
    const envFunc = Object.entries(process.env)
    .reduce((acc, [key, val]) => {
      if (key.startsWith('RSS_')) {
        acc.push(`${key}=${val}`);
      }

      return acc;
    }, [])
    .join('; ');

    console.log(envFunc);
};

parseEnv();