//Very Hard
class Person {
    constructor(name, job, age){

    this.name = name;
    this.job = job;
    this.age = age;
  
}
excerise() {
    console.log(`I like swimming`)
}

fetchJob() {
    console.log(`This is ${this.name} and their occupation is ${this.job}`)
}
    }


let person01 = new Person('Benny', 35, 'Butcher')
person01.excerise()
person01.fetchJob()


class Programmer {
    constructor(name, job, age, languages, busy){
    this.name = name;
    this.job = job;
    this.age = age;
    this.languages = languages;
    this.busy = true;

    }

  
completeTask() {
    console.log(this.busy)
}
acceptNewTask() {
    console.log(this.busy = true)
}
offerNewTask() {
    if (Programmer01 = this.busy) {
        console.log("Benny has to go to work tonight")
    } else console.log("Benny is able to grab a cold one with the guys.")
}
learnLanguages() {
    console.log(this.languages)
}
listLanguages() {
    console.log('English','Russian');
}
}
let Programmer01 = new Programmer(person01.name, person01.job, person01.age)
Programmer01.completeTask();
Programmer01.acceptNewTask();
Programmer01.learnLanguages(('Tagalog', 'French', 'German'));
Programmer01.offerNewTask();

