/*
user.js
Does something with the user
Van Kingma
4/3/17
*/

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    return JSON.parse(this.getItem(key));
}

class User {

    constructor() {
        this.location = null;
        this.inventory_list = [];
        this.deaths = null;
        this.kidneys = null;
        this.wins = null;
        
        this.location = localStorage.getItem('location');
        if (this.location == null) {
            this.update_location(0);
        }
        
        this.inventory_list = localStorage.getItem('inventory')
        if (this.inventory_list == null){
            this.clear_inventory();
        }
        
        this.deaths = localStorage.getItem('deaths')
        if (this.deaths == null) {
            localStorage.setItem('deaths', 0);
        }
        
        this.kidneys = localStorage.getItem('kidneys')
        if (this.kidneys == null) {
            localStorage.setItem('kidneys', 0);
        }
        
        this.wins = localStorage.getItem('wins')
        if (this.wins == null) {
            localStorage.setItem('wins', 0);
        }
    }

    override_inventory() {
        localStorage.setItem('inventory',this.inventory_list);
        return true
    }
    get_inventory() {
        return this.inventory_list;
    }
    clear_inventory() {
        this.inventory_list = [];
        localStorage.setItem('inventory','[]')
        return true
    }

    add_item(item) {
        this.inventory_list.push(item);
        return this.override_inventory();
    }

    remove_item(item) {
        //find the index of an item matching the one being removed
        //then if it exists (aka isn't -1) then splice it out of the list.
        //This removes only one of the item passed in, not every one if they   
        //have more than one of the same.
        let index = this.inventory_list.indexOf(item);
        if (index > -1) this.inventory_list.splice(index, 1);
        return this.override_inventory();
    }

    update_location(locationID) {
        this.location = locationID;
        localStorage.setItem('location', locationID)
        return true
    }
    add_death() {
        this.wins = this.wins + 1;
        localStorage.setItem("deaths", this.deaths);
        return true
    }
    add_win() {
        this.wins = this.wins + 1;
        localStorage.setItem("wins", this.wins);
        return true
    }
    add_kidney() {
        this.kidneys = this.kidneys + 1;
        localStorage.setItem("kidneys", this.kidneys);
        return true
    }


}