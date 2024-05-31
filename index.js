const express = require('express'); 
const app = express(); 

// It will repeatedly the word 'I love GeeksforGeeks' 
const data = ('I love GeeksforGeeks').repeat(800) ; 

app.get('/', (req, res) => { 
// Send as 'text/html' format file 
res.send(data); 
}); 

// Server setup 
app.listen(8080, function () { 
console.log('Server listening on port 8080!'); 
});
