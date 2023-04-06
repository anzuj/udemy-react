import { useEffect, useState } from "react";


export default function useCounter(initialCount){
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
      console.log(count);
    }, [count]);
  
    const increment = () => {
      setCount(count + 1);
    };

    return {
        count,
       increment
    }
}