import React, { useState, useEffect } from "react";

function Sample(props){

    const [ name, setName ] = useState("");

    useEffect( () =>{
        console.log("Created")

        return () =>{ 
            console.log("Unmount");
        }
    }, []);

    useEffect( () => {
        console.log("Prop Changed");
        setName( props.name )
    }, [ props.name ] )

    const onH2Click = () => {
        setName("Mark")
    }

    return (
        <h2 onClick={onH2Click}> Hello World { name } </h2>
    )
}

export default Sample