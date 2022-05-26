const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
    }

    const renderSomething = (x) => {

        if(x) {
            return <h1> Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso</h1>
        }
    };

    return (
        <div>
            <div>
                <h1>Vendo eventos</h1>
                <button onClick={handleMyEvent}>Click1</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicouu")}>Click2</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

 
export default Events;