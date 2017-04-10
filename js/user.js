/*
user.js
Does something with the user
Van Kingma
4/3/17
*/

class User {

    constructor() {
        this.firstname = null;
        this.surname = null;
        this.hash_pass = null;
        this.inventory_list = null;
        this.admin_access_enabled = null;
        this.current_location = null;
        this.username = null;

        $.get("user.php",{get_first_name : true})
            .done(function(data) {
                console.log("User.js: Received First name (username)");
                this.firstname = data;
            });

        $.get("user.php",{get_last_name : true})
            .done(function(data) {
                console.log("User.js: Received Last name (username)");
                this.firstname = data;
            });

        $.get("user.php", {get_user_name : true})
            .done(function(data) {
                console.log("User.js: Received username (username)");
                this.username = data;
            })

        ////sends get requests to user.php to find the needed initial user information
        //if (window.XMLHttpRequest) {
        //    xmlhttp = new XMHttpRequest();
        //}
        //else {
        //    xmlhttp = newActiveXObject("Microsoft.XMLHTTP");
        //}
        //xmlhttp.onreadystatechange = function () {
        //    if (this.readyState == 4 && this.status == 200) {
        //        return this.responseText;
        //    }
        //};
        //xmlhttp.open("GET", "user.php?get_first_name=true", true);
        //xmlhttp.send();
        //this.firstname = this.responseText;
        //xmlhttp.open("GET", "user.php?get_last_name=true", true);
        //xmlhttp.send();
        //this.surname = this.responseText;
        //xmlhttp.open("GET", "user.php?get_hash_pass=true", true);
        //xmlhttp.send();
        //this.hash_pass = this.responseText;
        //xmlhttp.open("GET", "user.php?get_inventory=true", true);
        //xmlhttp.send();
        //this.inventory_list = this.responseText;
        //xmlhttp.open("GET", "user.php?get_current_location=true", true);
        //xmlhttp.send();
        //this.current_location = this.responseText;


    }


    get_first_name() {
        return this.firstname;
    }

    get_last_name() {
        return this.surname
    }

    set_name (newName) {
        this.name = newName;
        return true;
    }

    get_hashed_password() {
        return this.hash_pass;
    }

    get_inventory () {
            return this.inventory_list;
    }

    override_inventory (inventory) {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMHttpRequest();
        }
        else {
            xmlhttp = newActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                return this.responseText;
            }
        };
        xmlhttp.open("GET", "user.php?set_inventory=" + inventory, true);
        //user.php will overwrite user's inventory (probably parsed in json format), and return a boolean
        xmlhttp.send();
        if (this.responseText == "true") return true;
        else return false;
    }

    add_item (item) {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMHttpRequest();
        }
        else {
            xmlhttp = newActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                return this.responseText;
            }
        };
        xmlhttp.open("GET", "user.php?add_item=" + item, true);
        //user.php will add user's inventory table (probably parsed in json format), and return a boolean
        //methodology could be calling get_inventory, append item to the json style list, and call override_inventory with new json.
        xmlhttp.send();
    }

    remove_item (item) {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMHttpRequest();
        }
        else {
            xmlhttp = newActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                return this.responseText;
            }
        };
        xmlhttp.open("GET", "user.php?remove_item=" + item, true);
        //user.php will add user's inventory table (probably parsed in json format), and return a boolean
        //methodology could be calling get_inventory, append item to the json style list, and call override_inventory with new json.
        xmlhttp.send();
    }

    update_location (locationID) {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMHttpRequest();
        }
        else {
            xmlhttp = newActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                return this.responseText;
            }
        };
        xmlhttp.open("GET", "user.php?update_location=" + locationID, true);
        //user.php will update user's location ID stored in mySQL
        xmlhttp.send();
        this.current_location = locationID;
    }

    is_admin () {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMHttpRequest();
        }
        else {
            xmlhttp = newActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                return this.responseText;
            }
        };
        xmlhttp.open("GET", "user.php?is_admin=true", true);
        //user.php will return the boolean value of whether the user is an administrator
        xmlhttp.send();
    }

    get_current_location () {
        return this.current_location;
    }
}
