```js 
$0.onkeyup = console.log 

console.log(1)

setTimeout(()=> console.log(2), 0 )

Promise.resolve(3).then(console.log)

console.log(4)

now = Date.now()

while( now + 5000 > Date.now() ) {} 

console.log(5)
```

1
4
5
3

KeyUp
KeyUp
KeyUp

2

# Js Event Loop + Queues
https://www.youtube.com/watch?v=cCOL7MC4Pl0