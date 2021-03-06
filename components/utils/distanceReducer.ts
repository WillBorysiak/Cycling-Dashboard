import { distanceConverter } from './distanceConverter';

export const distanceReducer = (array: number[]) => {
	let distanceRawTotal = array.reduce(function (previousValue, currentValue) {
		return previousValue + currentValue;
	}, 0);

	let distanceKm = distanceConverter(distanceRawTotal, 2, false);

	return Number(distanceKm);
};
