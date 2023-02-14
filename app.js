const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let word = "";
    for (let i = 1; i <= 50; i++) {
        if(i%2!==0){            
            res.write(`<p>${i} Soy Impar!</p>`);
        }else{
            res.write(`<p>${i} Soy Par!</p>`);
        }
        
    }
    res.end();
  
});

app.listen(3000, () => console.log('Listening on port 3000!'));