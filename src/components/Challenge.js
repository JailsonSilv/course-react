/* ESSE EU FIZ

const Challenge = () => {

    const criaNumero1 = () => {
        return 5
    };

    const criaNumero2 = () => {
        return 2
    };

    const somaNum1Num2 = () => {
        return criaNumero1() + criaNumero2()
    };
    

    return (
        <div>
            <h1> Sum Challenge </h1>
            <div className="imprima">
                <h2>Imprimindo os número</h2>
                <p>Esse é o primeiro número: {criaNumero1()}</p>
                <p>Esse é o segundo número: {criaNumero2()}</p>
            </div>
            <div className="soma">
                <h2>Somando os número</h2>
                <button onClick={() => console.log(somaNum1Num2())}>Resultado</button>
            </div>
        </div>
    );

};

*/


const Challenge = () => {
    const a = 5
    const b = 2

  return (
    <div className="main">
        <h1 className="challenge"> Sum Challenge </h1>
        <div className="imprima">
            <h2>Imprimindo os número</h2>
            <p>Esse é o primeiro número: {a}</p>
            <p>Esse é o segundo número: {b}</p>
        </div>
        <div className="soma">
            <h2>Somando os número</h2>
            <button onClick={() => console.log(a + b)}>Resultado</button>
        </div>
    </div>
  );
};

export default Challenge;