import React,{useEffect,useRef}  from "react";
import Typed from "typed.js"; 

export default function TypingEffect(){
    const typedElement =useRef(null);
    const typedInstance =useRef(null);

    useEffect(() =>{
        typedInstance.current =new Typed(typedElement.current,{
            strings:
            ["Sourcing of Products" ,"Shipping of Products","Trading of Products"],
            typeSpeed: 50,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });

        return () =>{
            typedInstance.current.destroy();
        };
    },[]);
     return <span className="text" ref={typedElement}></span>;
}