const fs = require('fs');
// maduali kevojud dare ro mikham estefade konam mirizamesh tu variable inja
// chapesh mikonam
//ye seri objecte ye ye seri function ha dare . ye adame dige piade sazi karde

//console.log(fs); //fs chizi joz object nist
//mohemha: aapendfile 
//mohemtarin readfile
//const { readFile } = fs // az fs readfilesho keshidam birun 
//redfile ro haminja mostaghim seda mizanam.
//fs.readFile() //lheili marsoom nist
// writhefile
//ye seri objecte ye ye seri function ha dare . ye adame dige piade sazi karde


//import :systeme farakhanie majulha dar ES
fs.readFile("text.txt", "utf-8", (data, err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(err)
    return;
    //throw == generate
    console.log(data);
})


const prompt = require()