import { useCallback, useRef, useState } from "react";
import { deBounce, userGetRequest } from "./pages/components/exports";

export function useActionState(fn, isNotForm) {
  const [isLoading, setIsLoading] = useState(false);
  //   const [message, setMessage] = useState("");

  const formAction = async (e) => {
    if (!isNotForm) {
      e.preventDefault();
    }
    setIsLoading(true);
    try {
      await fn();
      //   setMessage("Action completed successfully.");
    } catch (error) {
      //   setMessage(error.message || "Something went wrong.");
      console.log({ "Error in Custom Hook": error });

    } finally {
      setIsLoading(false);
    }
  };

  return [formAction, isLoading];
}


export function useInstitutionFetcher(setFormData) {
  const cache = useRef({});


  const fetchInstitutionName = useCallback(
    deBounce(async (code) => {
      if (!code) return;
      if (cache.current[code]) {
        const { InstitutionName, Stream, Address } = cache.current[code];
        setFormData((prev) => ({
          ...prev,
          instituteName: InstitutionName,
          instituteType: Stream,
          instituteAddress: Address,
        }));
        return;
      }

      try {
        const response = await userGetRequest(`/institute-data/${code}`);
        const institutionName = response.data?.data?.InstitutionName;
        const stream = response.data?.data?.Stream;
        const address = response.data?.data?.Address;


        if (institutionName) {
          cache.current[code] = { InstitutionName: institutionName, Stream: stream, Address: address };

          setFormData((prev) => ({
            ...prev,
            instituteName: institutionName,
            instituteType: stream,
            instituteAddress: address
          }));
        }
      } catch (error) {

      }
    }, 300),
    []
  );

  return fetchInstitutionName;
};
