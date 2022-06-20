import './MyForm.css'

function MyForm() {
  return (
    <div className='formClass'>
        {/* 1 - Criação de form */}
        <h2>Forms</h2>
        <form>
            <div>
                <label htmlFor="name">Nome</label>
                <input className="tx1" type="text" name="name" placeholder="Digite seu nome"/>
            </div>
            <input className="btnSub" type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm