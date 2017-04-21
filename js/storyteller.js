/*
storynode.js
Holds the StoryTeller class
This is where all the magic happens, The creation of this class pulls down the Story and User data,
Instantiates the user's current story node, and begins assembling the page.
Trey Franklin
Chaise Farrar
 */

class StoryTeller {

    constructor() {
        this.json_story = null;
        this.user = new User();
        this.story_node = null;
        this.story_node_uid = null;
        this.selected_option = null;
        this.get_json_story();
        this.create_story_node(this.user.location);
        this.update_page();
    }

    get_json_story() {
        //fetch('../Story.json').then(function(data){
        //    this.json_story = data;
        //}.bind(this));
        //let response = httpGet("https://raw.githubusercontent.com/afterthought325/LoneForest/master/Story.json");
        let response = httpGet("../Story.json", false);
        if (response) {
            this.json_story = JSON.parse(response);
            return true;
        } else {
            return false;
        }
    }

    create_story_node(story_node_uid) {
        if (this.json_story === null) {
            return false;
        }

        let result = this.json_story[parseInt(story_node_uid)];

        if (result == null) {
            // no results found, error
            return false;

        } else {
            // found the requested story node
            this.story_node = result;
            this.selected_option = null;
            return true;
        }
    }

    update_story_node(event) {
        var story_option = event.target.value;
        // story_option is an integer corresponding to a location in the options array
        if (story_option > this.story_node.story_options.length) {
            // story option isn't present
            return false;
        }
        this.selected_option = this.story_node.story_options[story_option];

        let chance_of_death = this.selected_option.chance_of_death;
        let death = getRandomInt(0, 100); // play with fate and determine the death rate

        if (chance_of_death >= death) {
            //TODO: need to replace this with a sweetalert
            swal({
                title: "The End...",
                text: this.selected_option.death_description,
                imageUrl: "../images/death.jpeg"
            });
            this.selected_option = null;
            this.story_node_uid == 0;
        }
        this.proceed_to_next_node();
        this.update_page()
        return true;


    }

    proceed_to_next_node() {
        if (this.selected_option === null) {
            let next_node_id = 0;
            console.log("Restarting Game. At node: " + next_node_id);
            this.create_story_node(Number(next_node_id));
            this.user.update_location(next_node_id);
        } else {
            let next_node_id = this.selected_option.next_node_id;
            console.log("moving to Node" + next_node_id);
            this.create_story_node(Number(next_node_id));
            this.user.update_location(next_node_id);
        }
    }

    update_page() {
        //Inputing the Name into the Header.
        $("#subheading").text("Will you survive, " + this.user.forename + "?");
        $("#Location").text(this.story_node.location);
        $("#Location").hide().fadeIn(1000);
        $("#Description").text(this.story_node.description);
        $("#Description").hide().delay(1000).fadeIn(1000);
        $("#StoryOptions").empty();
        for (let x = 0; x < this.story_node.story_options.length; x++) {
            let option = this.story_node.story_options[x];
            //TODO: This is a workaround till we implement inventory
            if ((option.requires != undefined && option.requires != "") || (option.not_requires != undefined && option.not_requires != "")) {

                //TODO: IMPLEMENT INVENTORY
            } else {
                var btn = $("<div></div>").text(option.description);
                btn.addClass("w3-container w3-mobile w3-section w3-theme-d3 options-buttons");
                btn.css("width:100%");
                btn.val(x);
                $("#StoryOptions").append(btn);
                //$("#StoryOptions").append($("<br>"));

            }
        }
        $("#StoryOptions").hide().delay(2000).fadeIn(500);
    }
}
