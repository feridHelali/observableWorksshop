
const begin = () => console.log('begin')
begin()

const tacheA = function (cb) {
    setTimeout(function () {
        console.log('Tache A');
        cb()
    }, 3000);
   
}


const tacheB = function (cb) {
    setTimeout(function () {
        console.log('Tache B')
        cb()
    }, 2000)
}
const end= ()=>console.log('end')

tacheA(tacheB(end))

