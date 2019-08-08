const uuid = require("uuid/v1");

class Trip {
  constructor(destinationObj, imageUrl, startDate, returnDate) {
    this.destination = {
      city: destinationObj.city,
      state: destinationObj.state
    };
    this.imageUrl = imageUrl;
    this.startDate = startDate;
    this.returnDate = returnDate;
    this.id = uuid();
  }
  update(propName, newValue) {
    this[propName] = newValue;
  }
  updateDestination(destinationObj) {
    this.destination = {
      city: destinationObj.city,
      state: destinationObj.state
    };
  }
}
module.exports = Trip;
