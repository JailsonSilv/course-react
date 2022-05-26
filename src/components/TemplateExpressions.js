const TemplateExpressions = () => {
    const name = "Jailson"
    const data = {
        age:31,
        job: "Programmer",
    }

    return (
        <div>
            <h1> Olá, {name}, tudo bem? </h1>
            <p> Vc atua com: {data.job} </p>
            <p> { 5 + 5 } </p>
            <span> {console.log("JSX REACT")} </span>
        </div>
    );  
};


export default TemplateExpressions;