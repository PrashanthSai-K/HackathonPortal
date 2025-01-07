import { useState } from "react";

export function useActionState(fn, isNotForm) {
  const [isLoading, setIsLoading] = useState(false);

  const formAction = async (e) => {
    if(!isNotForm){
      e.preventDefault();
    }
    setIsLoading(true);
    try {
      await fn();
    } catch (error) {
        console.log({"Error in Custom Hook":error});
        
    } finally {
      setIsLoading(false);
    }
  };

  return [formAction, isLoading ];
}
