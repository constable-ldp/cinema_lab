const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117); 

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function () {
    const actual = cinema.films.title;
    assert.deepStrictEqual(actual, films.title);
  });

  it('should be able to find a film by title', function () {
    const actual = films[0].title;
    assert.deepStrictEqual(actual, "Moonlight");
  });

  it('should be able to filter films by genre', function () {
    const actual = [moonlight, trainspotting];
    test = cinema.movieFilterGenre('drama');    
    assert.deepStrictEqual(actual, test);
  });

  it('should be able to check whether there are some films from a particular year', function () {
  const actual = [bladeRunner, dunkirk, trainspotting];
  test = cinema.movieFilterYear(2017);
  assert.deepStrictEqual(actual, test);
  });

  it('should be able to check whether there are no films from a particular year', function () {
  const actual = 'No films came out this year. Weird';
  test = cinema.movieFilterYear(1990);
  assert.deepStrictEqual(actual, test);
  });

  it('should be able to check whether all films are over a particular length', function () {
  const actual = [bladeRunner];
  test = cinema.movieFilterLength(160);
  assert.deepStrictEqual(actual, test);
  });

  it('should be able to calculate total running time of all films', function () {
  const actual = 111 + 164 + 96 + 134 + 117;
  test = cinema.totalMovieLength(films);
  assert.deepStrictEqual(actual, test);
  });

  it('should be able to check whether there are some films from a particular year using general filter', function () {
    const actual = [bladeRunner, dunkirk, trainspotting];
    test = cinema.movieFilter('year', 2017);
    assert.deepStrictEqual(actual, test);
  });

  it('should be able to filter films by genre using general filter', function () {
    const actual = [moonlight, trainspotting];
    test = cinema.movieFilter('genre', 'drama');
    assert.deepStrictEqual(actual, test);
  });

  it('should be able to calculate length of specific film using general filter', function () {
    const actual = [bladeRunner];
    test = cinema.movieFilter('length', 164);
    assert.deepStrictEqual(actual, test);
  });

});
