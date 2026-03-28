var eventemitter=require("events")
var ee=new eventemitter()
var fun1=(m)=>{
    console.log(`Message from fun1 ${m}`)
}
var fun2=(m)=>{
    console.log(`Message from fun2 ${m}`)
}
ee.on('e1',fun1)
ee.on('e1',fun2)
ee.on('e1',()=>{
    console.log("Another Function")
})
ee.on('e2',fun1)
ee.on('e2',fun2)
var c=ee.listenerCount('e1')
console.log(`Count is ${c}`)
ee.emit('e1',"Event Task")
ee.emit('e2',"Welcome Students")
ee.removeListener('e1',fun1)
ee.removeAllListeners('e1',fun1)