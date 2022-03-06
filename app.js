const fileSystem= require('fs')


console.log('before read')

const readFile = (async ()=> await fileSystem.readFile('./data.txt'))()


if(!file){
    console.log(file)
}else{
    console.log(file.toString())
}
console.log('after read')