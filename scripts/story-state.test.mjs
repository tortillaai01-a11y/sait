import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getStoryState, chapterPositions } from '../src/experience/story-state.js';

const groups = ['wheelSpread', 'tankSpread', 'engineLift', 'cabLift'];

test('the first frame is the parts scene with the truck already disassembled', () => {
  const state = getStoryState(0);
  assert.equal(state.chapter, 0);
  assert.equal(state.departure, 0);
  groups.forEach(group => assert.equal(state[group], 1));
});

test('wheels are seated before the power unit and cab complete assembly', () => {
  const state = getStoryState(0.35);
  assert.equal(state.wheelSpread, 0);
  assert.ok(state.engineLift > 0);
  assert.equal(state.cabLift, 1);
});

test('the same truck can only depart after every component is seated', () => {
  for (let frame = 0; frame <= 200; frame++) {
    const state = getStoryState(frame / 200);
    if (state.departure > 0) groups.forEach(group => assert.equal(state[group], 0));
  }
  assert.equal(getStoryState(1).departure, 1);
});

test('scene buttons land on parts, repair and cargo respectively', () => {
  assert.deepEqual(chapterPositions.map(p => getStoryState(p).chapter), [0, 1, 2]);
});

test('assembly never snaps across a scene boundary and reverses with scroll', () => {
  for (const p of [0.12, 0.23, 0.28, 0.31, 0.34, 0.4, 0.44, 0.52, 0.66, 0.7, 0.74, 0.8, 0.82]) {
    const before = getStoryState(p - 0.00001);
    const after = getStoryState(p + 0.00001);
    [...groups, 'departure', 'road'].forEach(key => assert.ok(Math.abs(before[key] - after[key]) < 0.001));
  }
  const positions = [0, 0.25, 0.5, 0.75, 1];
  const forward = positions.map(getStoryState);
  const backward = positions.toReversed().map(getStoryState).toReversed();
  assert.deepEqual(forward, backward);
});

test('invalid and out-of-range positions cannot corrupt the scene', () => {
  assert.deepEqual(getStoryState(NaN), getStoryState(0));
  assert.deepEqual(getStoryState(-1), getStoryState(0));
  assert.deepEqual(getStoryState(2), getStoryState(1));
});
