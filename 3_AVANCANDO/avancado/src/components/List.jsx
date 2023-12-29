import { useState } from "react"

const List = () => {
    const [list] = useState(["Fábio", "Pedro", "Josué", "Fábio"])

    const [users, setUsers] = useState([
        {id: 1, name: "Fábio", age: 29},
        {id: 2, name: "Maria", age: 35},
        {id: 3, name: "Lucas", age: 21},
    ])

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4)
        setUsers ((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id ))
    }
    return (
      <div>
        {/*4 - Render sem key*/}
          <ul>
              {list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
          </ul>
        {/*5 - Render com key*/} 
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul> 
        {/* 6 - Previous state*/}
        <button onClick={deleteRandom}>Delete random user</button>
      </div>
  )
}

export default List;