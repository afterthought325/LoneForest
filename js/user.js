/*
user.js
Does something with the user
Van Kingma
4/3/17
*/

class User {

    constructor() {
        this.forename = null;
        this.surname = null;
        this.hash_pass = null;
        this.inventory_list = [];
        this.admin_access_enabled = null;
        this.current_location = null;
        this.username = null;

        $.get("../js/user.php",{get_forename : true})
            .done(function(data) {
                console.log("User.js: Received first name : "+ data);
                this.forename = data;
            });

        $.get("../js/user.php",{get_surname : true})
            .done(function(data) {
                console.log("User.js: Received Last name : "+ data);
                this.surname = data;
            });

        this.username = $.get("../js/user.php", {get_username : true})
            .done(function(data) {
                console.log("User.js: Received username : "+ data);
                this.username = data;
            });

        this.current_location = $.get("../js/user.php", {get_current_location : true})
            .done(function(data) {
                console.log("User.js: Received Current Location : "+data);
                this.current_location = data;
            });

        this.inventory_list = $.get("../js/user.php", {get_inventory : true})
            .done(function(data) {
                console.log("User.js: Received Inventory List : "+data);
                this.inventory_list = data;
            });

    }



    get_first_name() {
        return this.firstname;
    }

    get_last_name() {
        return this.surname
    }

    get_inventory () {
            return this.inventory_list;
    }

    override_inventory (inventory) {
        $.post("../js/user.php", {set_inventory : inventory})
            .done(function(data) {
                console.log("User.js: Inventory List Update == "+data);
                return data;
            })
    }

    add_item (item) {
        this.inventory_list.push(item);
        return this.override_inventory(this.inventory_list);
    }

    remove_item (item) {
        //find the index of an item matching the one being removed
        //then if it exists (aka isn't -1) then splice it out of the list.
        //This removes only one of the item passed in, not every one if they   
        //have more than one of the same.
        let index = this.inventory_list.indexOf(item);
        if(index > -1) this.inventory_list.splice(index,1);
        return this.override_inventory(this.inventory_list);
    }

    update_location (locationID) {
        this.current_location = locationID;
        $.post("../js/user.php",{update_location : locationID})
            .done(function(data){
                console.log("User.js : Current Location Update == "+data);
                return data;
            })
    }

    is_admin () {
        $.post("../js/user.php",{is_admin : true})
            .done(function(data){
                console.log("User.js : Is User? == " + data);
                return data;
            })
    }

    get_current_location () {
        return this.current_location;
    }
}

async function get_data(request) {
    let data = await fetch("../js/user.php?" + request)
    return data.text();
}
