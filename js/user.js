/*
user.js
Does something with the user
Van Kingma
4/3/17
*/

/*
 * Good Reference for defining Javascript Objects/Classes
 * http://www.phpied.com/3-ways-to-define-a-javascript-class/
 */

function User() {

    this.firstname = null;
    this.surname = null;
    this.hash_pass = null;
    this.inventory_list = null;
    this.admin_access_enabled = null;
    this.current_location = null;
    
    //sends get requests to user.php to find the needed initial user information
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
    xmlhttp.open("GET", "user.php?get_first_name=true", true);
    xmlhttp.send();
    this.firstname = this.responseText;
    xmlhttp.open("GET", "user.php?get_last_name=true", true);
    xmlhttp.send();
    this.surname = this.responseText;
    xmlhttp.open("GET", "user.php?get_hash_pass=true", true);
    xmlhttp.send();
    this.hash_pass = this.responseText;
    xmlhttp.open("GET", "user.php?get_inventory=true", true);
    xmlhttp.send();
    this.inventory_list = this.responseText;
    xmlhttp.open("GET", "user.php?get_current_location=true", true);
    xmlhttp.send();
    this.current_location = this.responseText;


    this.get_first_name = function() {
        return this.firstname;
    };

    this.get_last_name = function(){
        return this.surname
    };

    this.set_name = function(newName) {
        this.name = newName;
        return true;
    };

    this.get_hashed_password = function() {
        return this.hash_pass;
    };

    this.get_inventory = function() {
            return this.inventory_list;
    };

    this.override_inventory = function(inventory) {
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
    };

    this.add_item = function(item) {
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
    };

    this.remove_item = function(item) {
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
    };

    this.update_location = function(locationID) {
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
    };

    this.is_admin = function() {
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
    };

    this.get_current_location = function() {
        return this.current_location;
    };
};
