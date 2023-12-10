
import { useMemo } from "react";
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export default function FactorialComponent({num}) {
const res=useMemo( () =>factorial(num), [num]);

  return <div className='result'>The factorial of {num} is {res}</div>;
}

