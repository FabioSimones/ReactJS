import React from 'react'

const Container = ({children}) => {
  return (
    <div><h1>Contéudo do componente Pai</h1>
    {children}
    </div>
  )
}

export default Container