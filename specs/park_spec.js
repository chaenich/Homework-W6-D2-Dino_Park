const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    // Total vistors: 505
    dino1 = new Dinosaur('t-rex', 'carnivore', 80);
    dino2 = new Dinosaur('oviraptor', 'omnivore', 40);
    dino3 = new Dinosaur('oviraptor', 'omnivore', 22);
    dino4 = new Dinosaur('diploduck', 'herbivore', 38);
    dino5 = new Dinosaur('t-rex', 'carnivore', 75);
    dino6 = new Dinosaur('dimpledocus', 'herbivore', 52);
    dino7 = new Dinosaur('diploplum', 'herbivore', 120);
    dino8 = new Dinosaur('oviraptor', 'omnivore', 56);
    dino9 = new Dinosaur('ovirappper', 'omnivore', 22);
    dinoCollection = [ dino1, dino2, dino3, dino4, dino5, dino6, dino7, dino8, dino9 ];
    park = new Park('Dino Park', 10.00, dinoCollection);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Dino Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10.00);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurCollection.length;
    assert.deepStrictEqual(actual, 9); // 3 dinosaurs
  });

  it('should be able to add a dinosaur to its collection', function () {
    dino4 = new Dinosaur('heliraptor', 'herbivore', 35);
    park.addADinosaur(dino4);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 10);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeADinosaur();
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 8);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.findDinosaurMostVisitors();
    assert.deepStrictEqual(actual.species, 'diploplum');
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.findAllDinosaursOfASpecies('oviraptor');
    assert.deepStrictEqual(actual.length, 3);
  });

  it('should be able to calculate total number of visitors per day', function () {
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 505);
  });

  it('should be able to calculate total number of visitors per year', function () {
  // Assuming this is daily visitors * 365 -> 184,325
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 184325);
  });

  it('should be able to calculate total revenue for annual ticket sales', function () {
  // Assuming this is annual visitors (184,325) * entry price -> 1,843,250
  const actual = park.totalRevenueForYear();
  assert.strictEqual(actual, 1843250);
  });

  // Extensions
  xit('should be able to remove all dinosaurs of a particular species');

  it('should be able to provide a breakdown of dinosaur and types', function () {
    const actual = park.dinosaurBreakdown();
    assert.deepStrictEqual(actual, { carnivore: 2, herbivore: 3, omnivore: 4 } );
  });

});
