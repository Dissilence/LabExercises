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
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short, need at least 4 characters");
            return;
        }
        this._name = value;
    }
};

newUser.name = "Pete";
console.log(newUser.name);

newUser.name = "Jo";