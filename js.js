function midata(data, sec) {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(data);
      }, sec);
    } else {
      reject("Error, data no conseguida.");
    }
  });
}

async function ejecutar() {
  try {
    let response = await midata("feat", 2000);
    console.log(response);
  } catch (e) {
    console.log(e);
  }

  try {
    let response = await midata("feat2", 2000);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}
ejecutar();