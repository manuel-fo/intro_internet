
class RestView {

    constructor(model) {
        this.model = model;
        document.body.addEventListener('modelChange',  // subscribe to model changes
            (function (e) { this.restoreTable(); }).bind(this));


    }

    restoreTable() {
        var tbl = document.querySelector("#historytable");
        tbl.innerHTML = "";
        let restaurantHistory = this.model.getHistory();
        let tr = document.createElement("tr");
        for(let key in restaurantHistory[0]) {
            let th = document.createElement("th");
            th.innerHTML = key;
            tr.appendChild(th);
        }
        tbl.appendChild(tr);
        for(let restaurant of restaurantHistory) {// iterates over objects
            tr = document.createElement("tr");
            tbl.appendChild(tr);
            for(let key of Object.keys(restaurant)) {
                var td = document.createElement("td");
                td.innerHTML = restaurant[key];
                tr.appendChild(td);
            }
        }
    }
}

