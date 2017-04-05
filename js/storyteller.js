

/*
 * Good Reference for defining Javascript Objects/Classes
 * http://www.phpied.com/3-ways-to-define-a-javascript-class/
 */
//import { StoryNode } from 'js/storynode.js';
//import { User } from 'js/user.js';


Class StoryTeller() {
    constructor(){
        var this.json_story = (function() {
            $.getJSON( "Story.json")
                .done(function( json ) {
                    console.log("Story.json Loaded");
                    this.json_story = json;
                })
                .fail(function( jqxhr, textStatus, error ) {
                    var err = textStatus + ", " + error;
                    console.log( "Request Failed: " + err );
            });
        })();
        var this.user = new User();
        var this.story = new StoryNode(User.current_location,this.json_story); 
    }

};

