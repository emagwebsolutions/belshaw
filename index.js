const obj = {
    age: 33
}


Object.defineProperty(obj,'talk', {
    get: function(){
        return age
    }
})

console.log(obj.talk)