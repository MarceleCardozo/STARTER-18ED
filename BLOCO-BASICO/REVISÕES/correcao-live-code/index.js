const api = axios.create({
  baseURL: 'https://6495dc81b08e17c91792c92d.mockapi.io/api/v1/people',
});

const cardsContainer = document.getElementById('cardsContainer');
async function listarPessoas() {
  try {
    const response = await api.get('/');
    const pessoas = response.data;

    pessoas.forEach(pessoas => {
      renderizarCard(pessoas)
    });
  } catch (error) {
    console.log(error);
  }
}

function renderizarCard(pessoa) {
  const card = document.createElement('div');
  card.classList.add('card')

  card.innerHTML = `
    <div class="card mb-3" style="max-width: 540px; col-6">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${pessoa.avatar}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${pessoa.name} ${pessoa.last_name}</h5>
            <p class="card-text">${pessoa.phone}</p>
            <p class="card-text"><small class="text-body-secondary">${pessoa.createdAt}</small></p>
          </div>
        </div>
      </div>
    </div>
  `;

  cardsContainer.appendChild(card);
}

async function pesquisarPessoas() {
  const searchInput = document.getElementById('searchInput');

  try {
    //pesquisa por outros valores
    const response = await api.get(`/?name=${searchInput.value}`);
    const pessoas = response.data;

    cardsContainer.innerHTML = '';

    pessoas.forEach(pessoa => {
      renderizarCard(pessoa)
    })
  } catch (error) {
    console.log(error)
  }
}

listarPessoas();