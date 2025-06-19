import { setSkill, getSkill } from "./ProgrammerSkill.js";

export class Programer1 {
    constructor(name, skill) {
        this.name = name;
        setSkill(this, skill);
    }

    code() {
        console.log(`${this.name} is coding in ${getSkill(this)}`);

    }
}