class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name
  }
  get remainingVacationDays() {
    return this._remainingVacationDays
  }
  takeVacationDays(daysOff){
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }
}

//Only the similar properties and methods are defined in the parent class. 
