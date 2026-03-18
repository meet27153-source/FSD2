var p=require("path")
var addr="D:/MeetFSD2/ASF1/my1.html"
var bn=p.basename(addr)
var dn=p.dirname(addr)
var en=p.extname(addr)
console.log(`Base name:${bn}
Directory name:${dn}
Extension name:${en}`)
var ps=p.parse(addr)
console.log(ps)