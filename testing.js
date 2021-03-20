function summation(num) {
    const numArr = [];
    for (let i = 0; i < num; i++) {
        numArr.push(num - i);
    }
    return numArr.reduce((a, b) => a + b, 0);
}
const zooAnimals = [
    { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
    { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
    { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
    { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
    { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
    { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
    { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
    { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
    { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
    { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
  ];

function animalNames(array){
    const output = [];
    array.forEach(function(obj) {
        let string = `name: ${obj.animal_name}, scientific: ${obj.scientific_name}`;
        return output.push(string);
    });
    return output;
}

function lowerCaseNames(array){
    return array.map(x => x['animal_name'].toLowerCase());
}

function lowPopulationAnimals(array){
    return array.filter(animal => animal.population < 5);
  }

function USApop(array){
    const newArr = array.map(x => x.population);
    
    return newArr.reduce((a, b) => a + b, 0);
  }

// console.log(USApop(zooAnimals));
// console.log(lowPopulationAnimals(zooAnimals));
// console.log(lowerCaseNames(zooAnimals));
// const strings = animalNames(zooAnimals);

// console.log(strings);

function CuboidMaker(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

const cube1 = new CuboidMaker(4,4,2);
console.log(cube1);