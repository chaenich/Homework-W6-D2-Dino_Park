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
  mostPopularDinosaur = this.dinosaurCollection[0];
  for (let i = 0; i < this.dinosaurCollection.length; i++) {
    if (this.dinosaurCollection[i].guestsAttractedPerDay > mostPopularDinosaur.guestsAttractedPerDay) {
      mostPopularDinosaur = this.dinosaurCollection[i];
    }
  }
  return mostPopularDinosaur;
}

Park.prototype.findAllDinosaursOfASpecies = function (species) {
  dinosaurOfSpeciesList = [];
  for (let i = 0; i < this.dinosaurCollection.length; i++) {
    if (this.dinosaurCollection[i].species === species) {
      dinosaurOfSpeciesList.push(this.dinosaurCollection[i]);
    }
  }
  return dinosaurOfSpeciesList;
}

Park.prototype.totalVisitorsPerDay = function () {
  totalVisitors = 0;
  for (let i = 0; i < this.dinosaurCollection.length; i++) {
    totalVisitors += this.dinosaurCollection[i].guestsAttractedPerDay;
  }
  return totalVisitors;
}

Park.prototype.totalVisitorsPerYear = function () {
  // Assuming this is daily visitors * 365 -> 184,325
  return this.totalVisitorsPerDay() * 365;
}

Park.prototype.totalRevenueForYear = function () {
  // Assuming this is annual visitors (184,325) * entry price -> 1,843,250
  return this.totalVisitorsPerYear() * this.ticketPrice;
}

// Extensions
Park.prototype.removeAllDinosaursOfASpecies = function (species) {
  for (let i = 0; i < this.dinosaurCollection.length; i++) {
    if (this.dinosaurCollection[i].species === species ) {
      this.dinosaurCollection.splice(i, 1);
      i--;
    }
  }
  return this.dinosaurCollection.length;
}

Park.prototype.dinosaurBreakdown = function () {
  dinosaurBreakdown = { carnivore: 0, herbivore: 0, omnivore: 0 };
  for (let i = 0; i < this.dinosaurCollection.length; i++) {
    dinosaurBreakdown[this.dinosaurCollection[i].diet]++;
  }
  return dinosaurBreakdown;
}

module.exports = Park;
