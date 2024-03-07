export interface mapRangeOptions {
  inputValue: number;
  outputMin: number;
  outputMax: number;
  inputMin: number;
  inputMax: number;
}

export const mapRange = (options: mapRangeOptions) => {
  const { inputValue, outputMax, outputMin, inputMax, inputMin } = options;

  const result =
    ((inputValue - inputMin) / (inputMax - inputMin)) *
      (outputMax - outputMin) +
    outputMin;

  if (result === Infinity) return 0;

  return result;
};
