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
        this.location = null;
        this.username = null;
        this.is_admin = null;

        this.is_admin = httpGet("../js/user.php?is_admin=true", false);
        this.forename = httpGet("../js/user.php?get_forename=true", false);
        this.surname = httpGet("../js/user.php?get_surname=true", false);
        this.username = httpGet("../js/user.php?get_username=true", false);
        this.location = httpGet("../js/user.php?get_location=true", false);
        this.temp_inventory_list = httpGet("../js/user.php?get_inventory=true", false);
        if (this.temp_inventory_list == [] || this.temp_inventory_list == "") {
            this.temp_inventory_list = "[]";
        }
        this.inventory_list = jQuery.parseJSON(this.temp_inventory_list);
    }

    override_inventory(inventory) {
        $.post("../js/user.php", { set_inventory: inventory })
            .done(function(data) {
                console.log("User.js: Inventory List Update == " + data);
                return true;
            })
    }
    get_inventory() {
        return this.inventory_list;
    }
    clear_inventory() {
        $.post("../js/user.php", { clear_inventory: "value" })
            .done(function(data) {
                console.log("User.js: Inventory List cleared");
                return true;
            })
    }

    add_item(item) {
        this.inventory_list.push(item);
        return this.override_inventory(this.inventory_list);
    }

    remove_item(item) {
        //find the index of an item matching the one being removed
        //then if it exists (aka isn't -1) then splice it out of the list.
        //This removes only one of the item passed in, not every one if they   
        //have more than one of the same.
        let index = this.inventory_list.indexOf(item);
        if (index > -1) this.inventory_list.splice(index, 1);
        return this.override_inventory(this.inventory_list);
    }

    update_location(locationID) {
        this.location = locationID;
        $.post("../js/user.php", { set_location: locationID })
            .done(function(data) {
                console.log("User.js : Current Location Update == " + data);
                return true
            })
    }
}