const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('diplodocus', 'herbivore', 30);
    dino3 = new Dinosaur('oviraptor', 'omnivore', 40);
    dinoCollection = [ dino1, dino2, dino3 ];
    park = new Park('Dino Park', 7.50, dinoCollection);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Dino Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 7.50);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurCollection.length;
    assert.deepStrictEqual(actual, 3); // 3 dinosaurs
  });

  it('should be able to add a dinosaur to its collection', function () {
    dino4 = new Dinosaur('heliraptor', 'herbivore', 35);
    park.addADinosaur(dino4);
    const actual = park.dinosaurCollection.length;
    assert.deepStrictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeADinosaur();
    const actual = park.dinosaurCollection.length;
    assert.deepStrictEqual(actual, 2);
  });

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to remove all dinosaurs of a particular species');

});
