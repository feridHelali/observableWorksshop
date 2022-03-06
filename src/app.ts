import { fromEvent, map } from 'rxjs';

const canvas = document.getElementById('canvas');
const unsubscribeButton = document.querySelector("#us");

const ctx = canvas.getContext('2d')

const unsubScribeButtonStream$= fromEvent(unsubscribeButton,'click')


const source$ = fromEvent(document, 'mousemove')

const subscription= source$.pipe(
    map(e => ({ x: e.x, y: e.y }))
).subscribe({
    next: (data) => {
        console.log(data);
        ctx.beginPath();
        ctx.arc(data.x, data.y, 5, 0, 2 * Math.PI);
        ctx.stroke();
    },
    error: (error) => {
        console.error(error)
    },
    complete: () => {
        console.log('complete')
    }
})

const subscription2= source$.pipe(
    
    map(e =>{
        return ({ x: e.x, y: e.y })
    } )
).subscribe({
    next: (data) => {
        console.log(`%c ${JSON.stringify(data)}`,"{color:tomato;}");
       
        ctx.beginPath();
        ctx.fillStyle = 'orange';
        ctx.arc(data.x+10, data.y+10, 5, 0, 2 * Math.PI);
        ctx.stroke();
    },
    error: (error) => {
        console.error(error)
    },
    complete: () => {
        console.log('complete')
    }
})

unsubScribeButtonStream$.subscribe(data=>{
  if(subscription){
      subscription.unsubscribe()
  }
})

console.log(':)')