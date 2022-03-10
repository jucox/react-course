function Event() {
    
    function clicou() {
        const btn = document.querySelector("button#btn")
        btn.innerText = "Clicou!"
    }

    return (
        <>
            <p>Clique no botão:</p>
            <button id="btn" onClick={clicou}>Clicar</button>
        </>
    )
}

export default Event