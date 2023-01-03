let party = [    {
    name: 'Joline',
    hitpoints: 15,
    belongings: ["spear", "bread", "Tums"],
    companion: {
        name: "Tabby",
        type: "cat",
    }
},
{
    name: 'Timothy',
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velma",
        type: "Bat",
    }
},
{
    name: 'Sarah',
    hitpoints: 20,
    belongings: ["bow", "arrows", "wood"],
    companion: {
        name: "Tony",
        type: "tiger",
    }
},]
// Prompt 1: double the hitpoints of everyone in the party
party.forEach((members) => {
    members.hitpoints = 2*members.hitpoints;
}) 
console.log(party);

// Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp

const hitByArrow = (name, hp) => {
    party.forEach((member) => {
        if(member.name == name){
            member.hitpoints -= hp;
        }
    })
}
hitByArrow("Timothy", 5);
console.log(party)

// Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it

const changeType = (name, type) => {
    party.forEach((member) => {
        if (member.name == name) {
            member.companion.type = type;
        }
    })
}
changeType("Sarah", "jellyfish");
console.log(party);

// Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.

const addHealth = (name, hp, item) => {
    party.forEach((member) => {
        if (member.name == name) {
            member.hitpoints += hp;
            member.belongings.forEach((belonging, index) => {
                if(belonging == item) {
                    member.belongings.splice(index, 1);
                }
            })
        }
    })
}
addHealth("Timothy", 20, "potion");
console.log(party);

// Prompt 5: Timothy got hungry and stole Joline's bread. 
// Take it out of her belongings and put it  into Timothy's belongings.

// Prompt 6: Joline got upset and left the party. Take her out of the array. 
// (use the name of the leaving member as a parameter)

const deleteMember = (name) => {
    party.forEach((member) => {
        if(member.name == name){
            delete member.name;
            delete member.hitpoints;
            delete member.belongings;
            delete member.companion;
        }
    })
}
deleteMember("Joline");
console.log(party);

// Prompt 8: The party has been doing well! They found 200 gold. 
// Create a new property called gold and split the gold evenly between everyone.
//  (amount of gold is parameter)

const shareGold = (g) => {
    gold = Number((g/3).toFixed(2));
    party.forEach((member) => {
        member.gold = gold;
    })
}
shareGold(200);
console.log(party);

// Prompt 9: Sarah is tired of taking care of a jellyfish. 


// Subtract some gold from her and change her companion to a bear.
party[2].gold -= 40;


// Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword"

party[1].belongings[0] = "rusty sword"
console.log(party);

// Prompt 11: Write a function called setLeader that takes a name as a parameter.
//  The member with that name should have a new property leader: 
// true while the other members have leader: false.





