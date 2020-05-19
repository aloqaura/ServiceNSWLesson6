/* 1 Create a class called Pet */
// class pets {

// }

/* 2 Give the class 3 properties called givenName, age and owner Id */

/* 3 Create a constructor that assigns the 3 properties above */
// class owner {
//     constructor(givenName, age, ownerID) {
//         this.givenName = givenName;
//         this.age = age;
//         this.ownerID = ownerID;
//     }
//     givenName;
//     age;
//     ownerID;
// };

/* 4 Create a class called Owner with 3 properties: givenName, familyName and id */

/* 5 Create a constructor for the Owner class that assigns the values above. */

/* 6 Create a method in the class Owner called getFullName that takes no arguments and returns the full name of the owner */

/* 7 Create a static method in the class Pet called getOwnerById that takes 2 arguments, the first should be a pet object and the second should be an array of owners. The function should return the 
full name of the owner with an id matching the ownerId of the pet or else return an error message. */
class Owner {
    constructor(givenName, familyName, id) {
        this.givenName = givenName;
        this.familyName = familyName;
        this.id = id; // Answer to Q5
    }
    givenName;
    familyName;
    id; // Answer to Q4 

    getFullNameInstance() {
        return `${this.givenName} ${this.familyName}`;
    } // Answer to Q6 as a method
}

// let me = new Owner("Alex", "Burgess", 24); // Instance Function line 47 - 49
// console.log(me.getFullNameInstance());
// console.log(me);

// let owners = [
//     new Owner("John", "Noel", 21),
//     new Owner("Saied", "Long", 30),
//     new Owner("Layla", "Connor", 21)
// ];

// for (let i = 0 ; i < owners.length; i++) {
//     const petOwners = owners[i];
//     console.log(owners);
// }

/* 7 Create a static method in the class Pet called getOwnerById that takes 2 arguments, the first should be a pet object and the second should be an array of owners. The function should return the 
full name of the owner with an id matching the ownerId of the pet or else return an error message. */

class Pet {
    constructor(givenName, age, ownerId) {
        this.givenName = givenName;
        this.age = age;
        this.ownerId = ownerId;
    }

    static getOwnerById(pet, owners) {
        let foundOwner; // Why only a ;?
        for (let i = 0; i < owners.length; i++) {
            const owner = owners[i];
            if (owner.id === pet.ownerId) {
                foundOwner = owner;
                break;
            }
        }
        if (!foundOwner) {
            return "ERROR: owner ID does not match any pet ID";
        }

        return foundOwner.getFullNameInstance();
    }
}
let owners = [
    new Owner("John", "Noel", 21),
    new Owner("Saied", "Long", 30),
    new Owner("Layla", "Connor", 21)
];

let myPet = [
    new Pet("Dog", 5, 21),
    new Pet("Cat", 5, 30)
]
console.log(Pet.getOwnerById(myPet[1], owners));

/* 8 Create a class called Square with a single property, sideLength and create a constructor that assigns that value */
class Square {
    constructor(sideLength) {
        this.sideLength = sideLength
    }
}
let sq = new Square(10);
console.log(sq);