document.addEventListener('DOMContentLoaded', function () {
    const factEl = document.querySelector('.fact');
    const url = 'https://catfact.ninja';

    function get(resource) {
        const path = url + resource;
        const promise = fetch(path);
        return promise
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                return Promise.reject(resp);
            })
            .catch(err => console.error(err))
            .finally(() => {
                console.log('Odpytywanie API zakończone!');
            });
    }

    function create(resource, data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        };
        const path = url + resource;
        const promise = fetch(path, options);
        return promise
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                return Promise.reject(resp);
            })
            .catch(err => console.error(err))
            .finally(() => {
                console.log('Odpytywanie API zakończone!');
            });
    }

    // function remove(resource, id) { ... }
    // function update(resource, id, updatedEl) { ... }

    get('/fact').then(function (response) {
        factEl.innerText = response.fact;
    });
});
