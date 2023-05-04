const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const inputAgain = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    utils.trimProperties(input);
    expect(input).toEqual(inputAgain);
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const arrayA = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    let largest = utils.findLargestInteger(arrayA);
    expect(largest).toBe(3);

    const arrayB = [{ integer: -1 }, { integer: -3 }, { integer: -2 }];
    largest = utils.findLargestInteger(arrayB);
    expect(largest).toBe(-1);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toEqual(3);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
    const result = counter.countDown();
    expect(result).toEqual(2);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    for(let i = 0; i < counter.counter + 2; i++) {
      counter.countDown();
    }
    let result = counter.countDown();
    expect(result).toEqual(0);
  })
})

describe('[Exercise 5] Seasons', () => {
let seasons
beforeEach(() => {
  seasons = new utils.Seasons() // each test must start with fresh seasons
})
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const season = seasons.next();
    expect(season).toEqual('summer');
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const season = seasons.next();
    expect(season).toEqual('fall');
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    const season = seasons.next();
    expect(season).toEqual('winter');
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    const season = seasons.next();
    expect(season).toEqual('spring');
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    const season = seasons.next();
    expect(season).toEqual('summer');
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let season;
    for(let i = 0; i < 40; i++) {
      season = seasons.next();
    }
    expect(season).toEqual('spring');
  })
})

describe('[Exercise 6] Car', () => {
let focus
beforeEach(() => {
  focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
})
  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(20);
    expect(focus.odometer).toEqual(20);
    focus.drive(30);
    expect(focus.odometer).toEqual(50);
  })
  // test('[16] driving the car uses gas', () => {})
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
})
