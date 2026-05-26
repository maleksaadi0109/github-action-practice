function greet (name){
    return `Hello,${name}!`
}

 module.exports = greet;
 
 if(require.main === module){
    console.log(greet('world'))
}  

