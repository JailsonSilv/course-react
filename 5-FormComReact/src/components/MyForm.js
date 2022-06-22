import './MyForm.css'

import { useState } from "react";

const MyForm = ({user}) => {
    // 6 - Controlled inputs 
  // 3 - Gerenciamento de dados 
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");

  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value)
  };

  // console.log(name)
  // console.log(email)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário")
    console.log(name,  email, bio, role);

    // 7 - Limpar form
    setName("")
    setEmail("")
  }

  return (
    <div className='formClass'>
        {/* 5 - envio de form */}

        {/* 1 - Criação de form */}
        <h2>Forms</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">  Nome 
                  <input className="tx1" type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>
                </label>
                
            </div>
            {/* 2 - Label envolvendo input */}
            <label>
              <span>E-mail</span>
              <input className="tx2" type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>    
            {/* 8 - Textarea  */}
            <label htmlFor="">
              <span>Bio</span>
              <textarea 
                name="bio" 
                placeholder='Descrição do usuário' 
                onChange={(e) => setBio(e.target.value)} 
                value={bio}
              ></textarea>
            </label>
            <label>
              <samp>Função no sistema</samp>
              <select name="role" onChange={(e) => setRole(e.target.value)}
              value={role} >
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admi">Administrador</option>
              </select>
            </label>
              
            <input className="btnSub" type="submit" value="Enviar"  />
        </form>
    </div>
  )
}

export default MyForm