const searchTerm = document.querySelector('#term');
const addBtn = document.querySelector('#new');

addBtn.style.backgroundColor = 'green';
addBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    getResponse();
    searchTerm.value = '';
})

async function getResponse() {

    const resp = await axios.get('https://api.giphy.com/v1/gifs/search?', { params: { api_key: 'GKIlTQC687kY5LtKWnZvoIr6FpjUA6ga', q: searchTerm.value }});

    const num = Math.floor(Math.random() * resp.data.data.length);
    const oneGif = resp.data.data[num];
    const url = oneGif.images.original.url;

    let img = document.createElement('img');
    img.setAttribute('src', url);
    const div = document.querySelector('div');
    div.append(img);
}

const removeBtn = document.querySelector('#remove');
removeBtn.style.backgroundColor = 'red';
removeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    $('div').empty();
})
