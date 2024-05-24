import { getRandomPoint } from '../mock/point.js';
import { sortPointsArrByDay } from '../utils/task.js';
import { getRandomInt } from '../utils/common.js';
import Observable from '../framework/observable.js';

const POINTS_COUNT = getRandomInt(0, 2);

export default class PointsModel extends Observable{
  #points = Array.from({length: POINTS_COUNT}, getRandomPoint).sort(sortPointsArrByDay);

  get points() {
    return this.#points;
  }

  updatePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if(index === -1) {
      throw new Error('Can\'t update unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      update,
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType, update);
  }

  addPoint(updateType, update) {
    this.#points = [
      update,
      ...this.#points,
    ];
    this._notify(updateType, update);
  }

  deletePoint(updateType, update) {
    if (update === undefined) {
      return;
    }
    const index = this.#points.findIndex((point) => point.id === update.id);

    if(index === -1) {
      throw new Error('Can\'t delete unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType);
  }
}
export {POINTS_COUNT};
