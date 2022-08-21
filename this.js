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
        this.name = "Jan"
        this.adress = "Łódx, ul. Nowa 15, 90-500"
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

const newWorker = new Worker("Jan Kowalski", 25, 0)

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
const data = new Age('1983-06-16')
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
        return this.experience.reduce((total, item) => {
            return total + item.lat
        }, 0)
    }
    // dodanie nowego doświadczenia
    set setNewExperience(value) {
        this.experience.push(value)
    }

}
const arr = [{
    zawod: " Mechaniak",
    lat: 5
},
{
    zawod: "inżynier",
    lat: 4
}
]


class WorkerOkruszki extends Experience {
    
    constructor(name, secName, nextName, dataBirth, experience) {
        super()
        // tworzymy classy Name, Age, Experience, tworzymi po to żebysimy mogli użyć ich getterów, przy przypisywanieu wartości
        const fullNameClass = new Name(name, secName, nextName)
        const ageClass = new Age(dataBirth)
        const experienceClass = new Experience(experience)
        // przypisując wartości do naszej class używamy geterów ze stworzonych wyżej klas. 
        this.name = fullNameClass.getfullName
        this.age = ageClass.getAge
        this.experience = experienceClass.getExperience
        this.experienceYears = experienceClass.getExperienceYears

    }

    set addExperience(value) {
     super.setNewExperience = value
     this.experienceYears = super.getExperienceYears
    }
}
// 



// Użycie class WorkerOkruszki w HTML 

// utowrzenie pracowniak

const btnNewWorker = document.getElementById('newWorker')
let newWorkerOkruszki = []
function createNewWorker() {
    const imie = document.getElementById('imie').value
    const nextName = document.getElementById('nextName').value
    const surName = document.getElementById('surName').value
    const dataUrodzenia = document.getElementById('dataUrodzenia').value
    const zawod = document.getElementById('zawod').value
    const lat =parseInt(document.getElementById('lat').value) 
    const exp = [{
        zawod: zawod,
        lat: lat
    }]
    console.log(imie, surName, nextName, dataUrodzenia, exp)
    const nowyPracownik = new WorkerOkruszki(imie, surName, nextName, dataUrodzenia, exp)
    newWorkerOkruszki.push(nowyPracownik)

    console.log("newWorkerOkruszki z klika", newWorkerOkruszki)
    addToPage(newWorkerOkruszki)
    send(nowyPracownik)
     
}

function addToPage(para) {
    const workers = document.getElementById('workers')
    workers.innerText = ''
    debugger
    para.forEach(element => {
        const paragraf = document.createElement('p')
        paragraf.innerText = "imie pracowniak " + element.name  + "Ma lat " + element.age
        workers.appendChild(paragraf)
    });
}

function send(para) {
    // logika wysłania na be
}
// const newWorkerOkruszki = createNewWorker()



btnNewWorker.addEventListener('click', createNewWorker)


// dodanie noego doświadczenia
const btn = document.getElementById('btn')

function addExp() {
    const zawod = document.getElementById('zawodNew').value
    const lat = parseInt(document.getElementById('latNew').value)
    const noweDoswiadczenie = new Experience({
        zawod: zawod,
        lat: lat
    })
    console.log(noweDoswiadczenie)
    newWorkerOkruszki.addExperience = noweDoswiadczenie.experience
    console.log(newWorkerOkruszki)
}


btn.addEventListener('click', addExp)