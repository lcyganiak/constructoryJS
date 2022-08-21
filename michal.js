// import {zliczanie} from './reduce'
// this w funkcji
function t() {
    return this
}
const thisWFunkcji = t()
console.log(thisWFunkcji)
// this w objekcie
class Order {
    constructor() {
        this.xd = this
        this.name = "Michał"
        this.adress = "Gronik, ul.Grodzinska, 45-200"
    }
    get orderex() {
        return this.adress + ' ' + this.name
    }
}
const newOrder = new Order()
console.log(newOrder)
// tworzenie nowych class
 // Sipmle Fabric - fabryka - wzorzec tworzący proste obiekty
class Worker {
    constructor(name, age, experience) {
        this.name = name
        this.age = age
        this.experience = experience
    }
}
const newWorker = new Worker("Michał Kowalski",35, 0)
console.log(newWorker)
// okruszki tworze class za pomocą kilku innych class
class Name {
 constructor(name, secName, nextName) {
    this.fullName = name + ' ' + nextName + ' ' + secName
 }
 get getfullName() {
    return this.fullName
 }
}
class Age {
    constructor(dataBirth) {
        this.age = new Date().getFullYear() - new Date(dataBirth).getFullYear()
    }
    get getAge() {
        return this.age
    }
}
const data = new Age('1988-03-26')
console.log(data)
class Experience {
    constructor(experience) {
        this.experience = experience
    }
    get getExperience() {
        return this.experience
    }
    get getExperienceYears() {
        // sprawdz plik reduce.js zobaczysz jak to sie robi
        return this.experience.reduce((total, item)=> {
            return total + item.lat
        }, 0)
    }
    // dodanie nowego doświadczenia
    set setNewExperience(value) {
        this.experience.push(value)
    }
}
const arr = [ {
   nazwa : "Kierowca ",
    lat: 5
},
{
    zawod: "Profesor",
    lat: 2
}
]
class WorkerOkruszki {
    constructor(name, secName, nextName, dataBirth, experience) {
        // tworzymy classy Name, Age, Experience, tworzymi po to żebysimy mogli użyć ich getterów, przy przypisywanieu wartości
        const fullNameClass =  new Name(name, secName, nextName)
        const ageClass = new Age(dataBirth)
        const experienceClass = new Experience(experience)
            console.log(experienceClass)
// przypisując rawtości do naszej class używamy geterów ze stworzonych wyżej klas.
        this.name = fullNameClass.getfullName
        this.age = ageClass.getAge
        this.experience = experienceClass.getExperience
        this.experienceYears = experienceClass.getExperienceYears
    }
    set addExperience(value) {
    }
}
const newWorkerOkruszki = new WorkerOkruszki('Michal', "Ceran", "Stefan", '1988-05-20', arr)
console.log('newWorkerOkruszki', newWorkerOkruszki)
newWorkerOkruszki.addExperience = {zawod: "młodszy programista", lat: 3}
console.log('newWorkerOkruszki', newWorkerOkruszki)