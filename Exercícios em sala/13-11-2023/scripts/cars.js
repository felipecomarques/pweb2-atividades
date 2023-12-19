const getMarcas = () => {
    const tarefas = fetch('https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json')

    tarefas
        .then(resposta => resposta.json())
        .then(marcas => {
            marcas.forEach(marca => {
                const container = document.createElement('div');
                container.classList.add('car-container');

                const itemContainer = document.createElement('div');
                itemContainer.classList.add('car-item');

                const logo = document.createElement('img');
                logo.src = marca.image?.optimized;

                const nameElement = document.createElement('p');
                nameElement.textContent = `Nome da marca: ${marca.name}`;

                itemContainer.appendChild(logo);
                itemContainer.appendChild(nameElement);
                container.appendChild(itemContainer);

                document.querySelector('#carros').appendChild(container);
            });
        })
        .catch(erro => console.log(erro));
}

const btnMarcas = document.querySelector('#mostrar-marcas')
btnMarcas.addEventListener("click", getMarcas)
