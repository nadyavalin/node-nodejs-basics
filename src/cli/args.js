const parseArgs = () => {
  const args = process.argv.slice(2);
  const pairs = [];
  for (let i = 0; i < args.length; i += 2) {
    pairs.push([args[i], args[i + 1]]);
  }
  const formattedArgs = pairs.map(([propName, value]) => {
    return `${propName.replace(/^--/, "")} is ${value}`;
  });
  console.log(formattedArgs.join(", "));
};

parseArgs();
