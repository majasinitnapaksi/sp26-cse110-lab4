for (let key in statistics) {
  let value = statistics[key];

  if (key.includes('r') || value % 2 !== 0) {
    console.log(value);
  }
}
