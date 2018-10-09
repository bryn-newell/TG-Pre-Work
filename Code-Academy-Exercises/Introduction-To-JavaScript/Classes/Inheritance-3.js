class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}
const nurseOlynyk = new Nurse ('Olynyk', ['Trauma', 'Pediatrics'])

console.log(nurseOlynyk);


// When creating the subclass the two keywords extends and super come in handy. Extends makes the methods of the
// parent class available inside the subclass. The constructor called again when you create a new subclass
// object, accepts new arguments. The super keyword calls the constructor of the parent class, or it passes
// the argument of the parent class to the constructor of the subclass. The super method must always be called
// before using the this keyword, otherwise a reference error will occur. So it's best practice to call super
// on the first line of subclass constructors.
