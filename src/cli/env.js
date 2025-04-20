const parseEnv = () => {
  const envVars = Object.entries(process.env)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`);
  console.log(envVars.join("; "));
};

parseEnv();
