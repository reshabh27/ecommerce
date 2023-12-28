import axios from "axios";

const productionUrl = " https://api.escuelajs.co/api/v1";

export const customFetch = axios.create({
  baseURL: productionUrl,
});


export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};