const buscarGatinhos = (e) => {
    e.preventDefault()
    const xhr = new XMLHttpRequest( )
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4){
            if (xhr.status === 200) {
                const cats = JSON.parse(xhr.responseText)
                cats.forEach(cat => {
                    const img = document.createElement('img')
                    img.src = cat.url

                    const idElement = document.createElement('p')
                    idElement.textContent = `ID do gatinho: ${cat.id}`

                    const resolutionElement = document.createElement('p');
                    resolutionElement.textContent = `Resolução do Gatinho: ${cat.width} x ${cat.height}`;

                    const container = document.createElement('div');
                    container.classList.add('cat-container');
                    container.appendChild(img);
                    container.appendChild(idElement);
                    container.appendChild(resolutionElement);

                    document.querySelector("#gatinhos").appendChild(container);
                })
            } else {
                alert ('Erro na requisição')
            }
        }
    }
    xhr.send()
}

const btnMostrar = document.querySelector("#mostrar-gatinhos")
btnMostrar.addEventListener("click", buscarGatinhos)