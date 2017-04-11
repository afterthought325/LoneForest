

/*
 * Good Reference for defining Javascript Objects/Classes
 * http://www.phpied.com/3-ways-to-define-a-javascript-class/
 */
//import { StoryNode } from 'js/storynode.js';
//import { User } from 'js/user.js';

class StoryTeller{

    constructor(){
        this.json_story = null;
        this.current_user = new User();
        this.current_story_node = null;
        this.current_story_node_uid = null;
        this.get_json_story();
        this.create_story_node();

    }

    get_json_story() {
        var response = httpGet("https://raw.githubusercontent.com/afterthought325/LoneForest/master/Story.json");
        if (response) {
            this.json_story = JSON.parse(response);
            return true;
        } else {
            return false;
        }
    }

    create_story_node(story_node_uid){
        if (this.json_story === null){
            return false;
        }

        var result = $.grep(this.json_story.StoryNodes, function(story_node){ return story_node.id == story_node_uid; });

        if (result.length === 0) {
            // no results found, error
            return false;

        } else if (result.length === 1 ){
            // found the requested story node
            this.current_story_node = result[0];
            this.selected_option = null;
            return true;

        } else {
            // another error because we found more than one...
            return false;
        }
    }

    update_story_node(story_option){
        // story_option is an integer corresponding to a location in the options array
        if (story_option >= this.current_story_node.story_options.length) {
            // story option isn't present
            return false;
        }

        this.selected_option = this.current_story_node.story_options[story_option];
        let death = getRandomInt(0, 100);  // play with fate and determine the death rate

        if (this.selected_option.chance_of_death >= death) {
            alert("You died. Restart?");
            this.create_story_node(0);
            this.selected_option = null;
        }
        return true;
        
    }

    update_page(){
        //Inputing the Name into the Header.
        document.getElementById("Heading").innerhtml ="Will you survive, "+this.current_user.firstname+"?";
    }
}
