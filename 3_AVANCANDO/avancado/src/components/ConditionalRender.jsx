import React from 'react'

const ConditionalRender = () => {
    const x = true;

    const name = "Fábio"

  return (
    <div>
        
        {/* 7 - Render Condicional*/}
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true, SIM</p>}

        {/*8 - else*/}
        <h3>Render Ternário</h3>
        {name === "Fábio" ? (
            <div>
                <p>Olá {name}</p>
            </div>
        ):(
            <div>
               <p>Nome não encontrado!</p> 
            </div>
        )}
    </div>
  );
}

export default ConditionalRender