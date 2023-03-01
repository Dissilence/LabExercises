let user = {
    name: 'John',
    surname: 'Smith', 

    get fullName(){
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

console.log(user.name)
console.log(user.surname)
console.log(user.fullName)

user.fullName = 'James Smith'

console.log(user.fullName)
console.log(user.name)

for (let key in user) console.log(key);

let newUser = {
    //age : 30

    get age() {
        return this._age;
    },

    set age(value) {
        if (value  < 0) {
            console.log("age cannot be less than 0");
            return;
        } if (value  > 120) {
            console.log("age cannot be higher than 120");
            return;
        }
        this._name = value;
    }
};

newUser.age = 20;
newUser.age = 130;
newUser.age = -1;
console.log(newUser.age);
newUser.name = "Pete";
console.log(newUser.name);

newUser.name = "Jo";