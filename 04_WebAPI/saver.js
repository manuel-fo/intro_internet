class RestHistory {

    constructor() {
        this.histId = "";
        this.baseUrl = 'https://api.myjson.com/bins/'
    }

    async saveHistory(obj) {
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj),
        };
        let self = this;
        fetch(this.baseUrl, config)
        .then(function(resp){
            return resp.json();
        })
        .then(function(data) {
            self.histId = data.uri.substr(data.uri.lastIndexOf("/")+1);
            console.log('done')
        });
    }

    async getHistory() {
        console.log(`getting data for id ${this.histId}`)
        fetch(this.baseUrl + this.histId)
        .then(function(resp){   // promise resolves when headers are received... data still to come
            return resp.json();
        })
        .then(function(data) {
            console.log(`Got data ${data.z}`);
        })
        .catch(function(error) {
            console.log(error);
        });

    }
}

