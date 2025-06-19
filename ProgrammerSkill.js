const programmerSkill = new WeakMap();

export function setSkill(programmer, skills) {
    programmerSkill.set(programmer, skills);
}

export function getSkill(programmer) {
    return programmerSkill.get(programmer);
}