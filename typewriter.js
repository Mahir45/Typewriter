const sentence = "Hello my name is Mahir and im in Cohert B. \n";
let timeDelay = 230;
for (const i of sentence) {
  setTimeout(() => {
     process.stdout.write(i);
    }, timeDelay);
    timeDelay += 230;
}


