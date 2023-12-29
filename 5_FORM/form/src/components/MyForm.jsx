import { useState } from "react"
import "./MyForm.css"

const MyForm = ({userName, userEmail}) => {
    //3 - Gerenciamento de dados
    const[name, setName] = useState(userName);
    const[email, setEmail] = useState(userEmail);

    const [bio, setBio] = useState("");

    const [role, setRole] = useState("");

    const handleName = (e) =>{
        setName(e.target.value)
    };

    //5 - Envio de formulário
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name, email, bio, role)

        //Validação e envio

        setName ("");
        setEmail ("");
        setBio ("");
        setRole("")
    }


    console.log(name, email, bio)
  return (


    <div>
        {"1 - Criação de form"}
        {"5 - Envio de formulário"}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Informe seu nome" onChange={handleName}
                /*6 - Controlled inputs*/
                value = {name || ""}/>
                
            </div>
            {/*2 - Label envolvendo o input*/}
            <label>
                <span>E-mail:</span>
                {/*4 - onchange*/}
                <input type="email" name="email" placeholder="Digite seu email." onChange={(e) => {setEmail(e.target.value)}}
                value = {email || ""}/>
                
                
            </label>
            {/*8 - TextArea*/}
            <label>
                <span>
                    Bio:
                </span>
                <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => {setBio(e.target.value)}} value={bio || ""}></textarea>
            </label>
            {/*9 - Select*/}
            <label >
                <span>Função do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role || ""}>
                    <option value="user">Usuário</option>
                    <option value="edit">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>

    </div>
  )
}

export default MyForm