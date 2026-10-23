// All motion is derived from scroll position: reversing the scroll reverses
// assembly and departure without timers, teleports or a second truck.
const clamp = value => Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
const smooth = (start, end, progress) => {
  const t = clamp((progress - start) / (end - start));
  return t * t * (3 - 2 * t);
};

export const chapterPositions = [0, 0.5, 0.88];

export function getStoryState(value) {
  const progress = clamp(value);
  return {
    progress,
    chapter: progress < 0.28 ? 0 : progress < 0.74 ? 1 : 2,
    assembly: smooth(0.12, 0.66, progress),
    wheelSpread: 1 - smooth(0.12, 0.34, progress),
    tankSpread: 1 - smooth(0.23, 0.44, progress),
    engineLift: 1 - smooth(0.31, 0.52, progress),
    cabLift: 1 - smooth(0.4, 0.66, progress),
    road: smooth(0.7, 0.82, progress),
    departure: smooth(0.8, 1, progress),
  };
}
