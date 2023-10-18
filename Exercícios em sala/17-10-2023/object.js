let user = {
    name: "Felipe",
    age: 22,
    getAge: function() {
        return this.age
    },
    setAge: function(newAge) {
        this.age = newAge
    }
}

console.log(user.age)

user.setAge(30)
console.log(user.getAge)