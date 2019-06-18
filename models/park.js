const Park = function (name, ticketPrice, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = dinosaurCollection;
}

Park.prototype.addADinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeADinosaur = function () {
  this.dinosaurCollection.pop();
}

Park.prototype.findDinosaurMostVisitors = function () {

}

Park.prototype.findAllDinosaursOfASpecies = function () {

}

Park.prototype.totalVisitorsPerDay = function () {

}

Park.prototype.totalVisitorsPerYear = function () {

}

Park.prototype.totalRevenueForYear = function () {

}

// Extensions
Park.prototype.removeAllDinosaursOfASpecies = function () {

}

Park.prototype.dinosaurBreakdown = function () {

}


module.exports = Park;
