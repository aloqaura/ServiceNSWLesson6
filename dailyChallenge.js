/* Create a static method in the Owner class that takes 1 argument which should be an integer number and returns an array of randomly generated Owners with length equal to the number given. 
The ids of the owners should all be unique. You can use this gist to generate random names: https://gist.github.com/LukeParkerTAFE/161fd0d451f7236dae99fbb30573735d */
class Owner{
    constructor(givenName, familyName, id) {
        this.givenName = givenName;
        this.familyName = familyName
        this.id = id;
    }

    static uniqueIdGeneration(num) {
        let foundUniqueId;
        for(i = 0; i < )
    }
}


const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Charlotte", "Olivia", "Ava", "Amelia", "Mia", "Isla", "Oliver", "William", "Jack", "Noah", "Thomas", "James"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}

const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Johnson", "Taylor", "White", "Martin", "Anderson", "Thompson", "Nguyen"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}