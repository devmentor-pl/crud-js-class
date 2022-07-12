import CatFactsProvider from './CatFactsProvider.js';

document.addEventListener('DOMContentLoaded', function () {
    // pobieram element <p> ze strony
    const factEl = document.querySelector('.fact');

    const api = new CatFactsProvider();

    api.get('/fact').then(function (response) {
        // umieszczam treść ciekawostki w elemencie <p>
        factEl.innerText = response.fact;
    });
});
