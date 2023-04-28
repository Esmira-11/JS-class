//JS-class
//TASK 1
/*
class Student {
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
        this.technologies = [];
        this.status = 'Junior';
    }
    setTechnologies(technologies){
            this.technologies = [
            ...this.technologies,
            ...technologies, 
        ];
        
    }
    setNewStatus(newStatus){
         this.status = newStatus;
    }
    
}        
const student = new Student('Maxim', 20);
student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
student.setNewStatus('Middle');
console.log(student);
*/


//TASK 2
/*
class Person{
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }

    compareAge(_newPerson){
        this.newPerson = _newPerson;
        if(this.age > this.newPerson.age){
            console.log(`${this.name} is older than ${this.newPerson.name}`);
        }
        else if(this.age < this.newPerson.age){
            console.log(`${this.name} is younger than ${this.newPerson.name}`);
        }
    }
}

const person1 = new Person('Maxim', 24);
const person2 = new Person('Svetlana', 36);
const person3 = new Person('Irina', 23);
person1.compareAge(person2); //Maxim is younger than Svetlana
person2.compareAge(person3); // Svetlana is older than Irina
person3.compareAge(person1); // Irina is younger than Maxim
*/


//TASK 3
/*
class CarService{
    constructor(_name,_workingHours){
        this.name = _name,
        this.workingHours = _workingHours
        if(this.workingHours == ''){
            this.workingHours = DefaultWorkingHours();
        }
    }
    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
    }
    repairCar(_carName){
        
        this.carName = _carName; 
        if(this.carName == null){
            console.error('You need to specify the name of the car in order to repair it');
        }
        else{
            const d = new Date();
            let hour = d.getHours();
            if(hour>=(this.workingHours.from.split(':')[0]) && hour<=(this.workingHours.till.split(':')[0])){
                console.log(`Now we will repair your car carName! Please wait`)
            }
            else{
                console.log(`Unfortunately, we are closed now. Come back tomorrow`)
            }
        }
    }
}

const carService = new CarService('RepairCarNow', { from: '8:00', till:'20:00' });
carService.repairCar('BMW');
*/


//TASK 4
/*
class Dictionary{
    constructor(_name){
        this.name = _name;
        this.words = {};
    }

    add(_word,_description){
        this.word = _word;
        this.description = _description;
        if(this.word in this.words ===false){
            this.words[this.word]=this.description;
        }
        
    }

    remove(_key){
        this.key = _key;
        delete this.words[this.key];

    }
    get(_find){
        this.find = _find;
        if(this.find in this.words ===true){
            console.log(this.words[this.find]);
        }
        else{
            console.log("this word is not in the dictionary");
        }
    }
    showAllWords(){
        console.log(this.words);
    }
}
const dictionary = new Dictionary('Explanatory Dictionary');
dictionary. add('JavaScript', 'popular programming language');
dictionary.add("Web developer", "A person who creates new services and sites or maintains and supplements existing ones");
dictionary.remove("JavaScript");
dictionary.showAllWords();
*/


//TASK 5
/*
class Dictionary{
    constructor(_name){
        this.name = _name;
        this.words = {};
    }

    add(_word,_description){
        this.word = _word;
        this.description = _description;
        if(this.word in this.words ===false){
            this.words[this.word]=this.description;
        }
        
    }

    remove(_key){
        this.key = _key;
        delete this.words[this.key];

    }
    get(_find){
        this.find = _find;
        if(this.find in this.words ===true){
            console.log(this.words[this.find]);
        }
        else{
            console.log("this word is not in the dictionary");
        }
    }
    showAllWords(){
        console.log(this.words);
    }

}


class HardWordsDictionary extends Dictionary{
    constructor(_name,remove,get,showAllWords) {
        super(_name);

    }

    
    add(_word,_description){
        this.word = _word;
        this.description = _description;
        if(this.word in this.words ===false){
            this.words[this.word]=this.description;
            this.words.isDifficult=true;
        }
        
    }
    
}

const hardWordsDictionary = new HardWordsDictionary('Hard words');
hardWordsDictionary.add('amateur', 'One who practices science or art without special training, having only a superficial knowledge.');
hardWordsDictionary.add('neologism', 'A new word or expression, as well as the new meaning of the old word.');
hardWordsDictionary.add('quantum', 'The indivisible part of some quantity in physics.');
hardWordsDictionary.remove('neologism');
hardWordsDictionary.showAllWords();
*/


// //TASK 6
// class Dictionary{
//     #name;
     
//     set setMainName(_name){
//         this.#name = _name;
//     }

//     get mainName(){
//         return this.#name;
//     }
//     #words;

//     addNewWord(_word,_description){
//         this.word = _word;
//         this.description = _description;
//         if(this.word in this.#words ===false){
//             this.words[this.word]=this.description;
//         }
//     }
    
//     get allWords(){
//         console.log(this.#words);
//     }

//     constructor(_name){
//         this.#name = _name;
//         this.#words = {};
//     }


//     remove(_key){
//         this.key = _key;
//         delete this.#words[this.key];

//     }
//     get(_find){
//         this.find = _find;
//         if(this.find in this.#words ===true){
//             console.log(this.#words[this.find]);
//         }
//         else{
//             console.log("this word is not in the dictionary");
//         }
//     }
//     showAllWords(){
//         console.log(this.#words);
//     }

// }
// class HardWordsDictionary extends Dictionary{

//     constructor(_name,remove,get,showAllWords,mainName,setMainName,allWords,addNewWord) {
//         super(_name);

//     }

    
//     // add(_word,_description){
//     //     this.word = _word;
//     //     this.description = _description;
//     //     if(this.word in this.words ===false){
//     //         this.words[this.word]=this.description;
//     //         this.words.isDifficult=true;
//     //     }
        
//     // }
    
// }
// const hardWordsDictionary = new HardWordsDictionary('Hard words');
// hardWordsDictionary.addNewWord('amateur', 'One who practices science or art without special training, having only a superficial knowledge.');
// hardWordsDictionary.addNewWord('neologism', 'A new word or expression, as well as the new meaning of the old word.');
// hardWordsDictionary.addNewWord('quantum', 'The indivisible part of some quantity in physics.');

// hardWordsDictionary.remove('neologism');
// hardWordsDictionary.showAllWords();

// console.log(hardWordsDictionary.mainName); // Difficult words
// hardWordsDictionary.setMainName = 'New Dictionary';
// console.log(hardWordsDictionary.mainName); // New Dictionary
// console.log(hardWordsDictionary.allWords); // displays an object that contains the words dilettante and
// quantum



//TASK 7
/*
class Developer{
    constructor(_fullName,_age,_position){
        this.fullName = _fullName;
        this.age = _age;
        this.position = _position;
        this.technologies = [];
    }

    code(){

    }
    learnNewTechnology(_technology){
        this.technologies.push(_technology);
        

    }
}

class juniorDeveloper extends Developer{
    constructor(fullName,age){
        super(fullName);
        super(age);
        super(position) = "Junior"
    }
    code(){
        this.learnNewTechnology('HTML');
        this.learnNewTechnology('CSS');
        this.learnNewTechnology('JavaScript');
        console.log(`Junior developer is writing code...` + this.technologies.join());
    }
}
class middleDeveloper extends Developer{
    constructor(fullName,age){
        super(fullName);
        super(age);
        super(position) = "Middle"
    }
    code(){
        this.learnNewTechnology('React');
        console.log(`Middle developer is writing code...` + this.technologies.join());
    }

}
class seniorDeveloper extends Developer{
    constructor(fullName,age){
        super(fullName);
        super(age);
        super(position) = "Senior"
    }
    code(){
        this.learnNewTechnology('NodeJS');
        console.log(`Senior developer is writing code...` + this.technologies.join());
    }
}
*/
