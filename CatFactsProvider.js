class CatFactsProvider {
    constructor() {
        this.url = 'https://catfact.ninja';
    }

    get(resource) {
        return this._fetch(resource);
    }

    create(resource, data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        };
        return this._fetch(resource, options);
    }

    remove(resource, id) {
        const options = {
            method: 'DELETE',
        };
        return this._fetch(resource, options, id);
    }

    update(resource, id, updatedEl) {
        const options = {
            method: 'PATCH',
            body: JSON.stringify(updatedEl),
            headers: { 'Content-Type': 'application/json' },
        };
        return this._fetch(resource, options, id);
    }

    _fetch(resource = '', options = { method: 'GET' }, id = '') {
        const path = this.url + resource + `/${id}`;
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
}

export default CatFactsProvider;
