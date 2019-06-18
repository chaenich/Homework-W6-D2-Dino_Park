const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dino1 = new Dinosaur('t-rex', 'carnivore', 80);
    dino2 = new Dinosaur('oviraptor', 'omnivore', 40);
    dino3 = new Dinosaur('ovirapt2', 'omnivore', 40);
    dino4 = new Dinosaur('diploduck', 'herbivore', 38);
    dino5 = new Dinosaur('t-rexta', 'carnivore', 75);
    dino6 = new Dinosaur('dimpledocus', 'herbivore', 52);
    dino7 = new Dinosaur('diploplum', 'herbivore', 120);
    dino8 = new Dinosaur('oviraptorous', 'omnivore', 40);
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
    assert.deepStrictEqual(actual, 10);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeADinosaur();
    const actual = park.dinosaurCollection.length;
    assert.deepStrictEqual(actual, 8);
  });

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate total number of visitors per day');

  xit('should be able to calculate total number of visitors per year');

  xit('should be able to calculate total revenue for annual ticket sales');

  // Extensions
  xit('should be able to remove all dinosaurs of a particular species');

  xit('should be able to provide a breakdown of dinosaur and types');

});
