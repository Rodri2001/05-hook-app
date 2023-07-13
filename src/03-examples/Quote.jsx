import { useLayoutEffect, useRef, useState } from "react";
//import { MultipleCustomHooks } from "./MultipleCustomHooks";

export const Quote = ({ author, quote }) => {

  const pRef = useRef()

  const [boxSize, setboxSize] = useState({width:0 ,height:0})

  useLayoutEffect(() => {

  }, [quote])

  return (
    <blockquote className="blockquote text-end">
      <p ref={pRef} className="mb-1">{quote}</p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  );
};
