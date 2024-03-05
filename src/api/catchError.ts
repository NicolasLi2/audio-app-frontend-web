import { isAxiosError } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const catchError = (error: any): string => {
  let errorMessage = error.message;
  if (isAxiosError(error)) {
    const errorResponse = error.response?.data;
    if (errorResponse) {
      errorMessage = errorResponse.message;
    }
  }
  return errorMessage;
};

export default catchError;
