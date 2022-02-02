const animal = ["cat", "dog", "cow"];
console.log(animal.length);

for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
}

//trim()
const name = "    Sander     ";
console.log("Befor:", name);
const trimName = name.trim(); //will remove the spaces
console.log("after:", trimName);