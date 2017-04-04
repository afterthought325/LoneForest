/*
user.js
Does something with the user
Van Kingma
4/3/17
*/

function userClass(name) {

    this.name = null;
    this.hash_pass = null;
    this.inventory_list = null;
    this.admin_access_enabled = null;
    this.current_location = null;

}

userClass.prototype.get_name = function() {
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
    xmlhttp.open("GET", "user.php?get_name=true", true);
    //user.php will return the mySQL information containing the user's name
    xmlhttp.send();
}

userClass.prototype.set_name = function(newName){
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
    xmlhttp.open("GET", "user.php?set_name="+newName, true);
    //user.php will update user's name and return a boolean
    xmlhttp.send();
}

userClass.prototype.get_hashed_password = function() {
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
    xmlhttp.open("GET", "user.php?get_has_pass=true", true);
    //user.php will return the mySQL information containing the user's hashed password
    xmlhttp.send();
}


userClass.prototype.get_inventory = function() {
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
    xmlhttp.open("GET", "user.php?get_inventory=true", true);
    //user.php will return the mySQL information containing the user's inventory, probably parsed in json format
    xmlhttp.send();
}

userClass.prototype.override_inventory = function (inventory) {
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
}

userClass.prototype.add_item = function(item) {
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

userClass.prototype.remove_item = function(item) {
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

userClass.prototype.update_location = function(locationID) {
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
}

userClass.prototype.is_admin = function () {
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

userClass.prototype.get_current_location = function () {
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
    xmlhttp.open("GET", "user.php?get_current_location=true", true);
    //user.php will return the location ID of the last place the user was saved
    xmlhttp.send();
}