class RestVisit {

    constructor (name, bill, tipPct, people) {
        this.name = name;
        this.bill = bill;
        this._tipPct = tipPct;
        this.numPeople = people;
    }

    get tipct() {
        return this._tipPct;
    }

    set tipPct(pct) {
        this._tipPct = pct;
    }
}

class RestHistory {
    // This is the model that the controller and view
    // will interact with.
    constructor() {
        this.changeEvent = new Event('modelChange');  // creat an event for the view to subscribe to
        this.saver = new HistorySaver(); // use api service
        this.init();
    }
    async init() {

        try {
            let data = await this.saver.getHistory();
            this.history = data;
            document.body.dispatchEvent(this.changeEvent);
        } catch(error) {
            this.history = [];
        }
    }

    async addVisit(visit) {
        this.history.push(visit);
        let r = await this.saver.saveHistory(this.history);
        document.body.dispatchEvent(this.changeEvent);
    }

    getHistory() {
        return this.history;
    }
}

class HistorySaver {

    constructor() {
        this.histId = "15t5a4";  // assume this initial id is like a username
        this.baseUrl = 'https://api.myjson.com/bins/'
    }

    async saveHistory(obj) {
        let config = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj),   // stringify works fine on RestVisit objects!
        };
        let resp = await fetch(this.baseUrl+this.histId, config);
        return resp.json();
    }

    async getHistory() {
        console.log(`getting data for id ${this.histId}`)
        try {
            let resp = await fetch(this.baseUrl + this.histId)
            return resp.json();
        }
        catch(error) {
            console.log(error);
        }
    }
}