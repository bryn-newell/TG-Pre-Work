const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';

robot.recharge();

// Privacy in objects is the idea that only certain properties should be mutable. Some languages have
// privacy built into objects, but Javascript does not. Rather it follows naming conventions to signal how to
// interact with a property. One common convention is to place a _ before the name of a property. It is still
// possible to reassign these however.
