import { Person } from "./Person"
import { Student} from "./Student"
import { Mentor} from "./Mentor"

export class Cohort {
    name: string;
    students: Student[]; //list of students
    mentors: Mentor[]; //list of Mentors

    constructor (name: string) {
        this.name = name;
        this.students = [];
        this.mentors = [];
    }

    addStudent(newStudent){
        this.students.push(newStudent);
    }

    addMentor(newMentor){
        this.mentors.push(newMentor);
    }

    info(){
        console.log('\'The ' + this.name + ' cohort has ' + Object.keys(this.students).length + ' students and ' + Object.keys(this.mentors).length + ' mentors.\'');
    }
}