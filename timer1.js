//process.stdout.write('\x07');

let args = process.argv.slice(2);

//checks that args array is not empty
if (args.length){

  for (let i of args){

    //turns each element of args into an integer
    i = parseInt(i);

    //checks that element is at least 0 and an integer before it executes
    if (i >= 0 && (typeof i === 'number')) { 

      //sets delay of sound execution depending on value of element
      setTimeout(() => {
        process.stdout.write('\x07');
      }, i * 1000);
    };
   };
};

