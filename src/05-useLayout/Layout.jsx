import { Loading } from "../03-examples/Loading";
import { Quote } from "../03-examples/Quote";
import { useCounter,useFetch } from "../hooks";


export const Layaout = () => {
  const { counter, increment,  } = useCounter(1);
  const { data, isLoading, } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  // no se puede desestructurar un array y tampoco si el resultado es null, entonces convierto data = null a data = false con el !!data
  // console.log(data[0]);

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (<Loading />) : (<Quote author={author} quote={quote} />)}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
};
