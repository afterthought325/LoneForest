/*
storynode.js
Holds the StoryNode class that's used to represent the JSON story as a class
Trey Franklin
4/3/17
 */



function StoryNode (story_node_id, json_story) {
     this.story_node_id = story_node_id;
     this.json_story = JSON.parse(json_story);
     this.story_location = null;
     this.description = null;
     this.next_story_options = null;
     this.special_options = null;
}

 StoryNode.prototype.get_story_location = function(){
     return this.story_location;
};

StoryNode.prototype.get_description = function() {
     return this.description;
};

StoryNode.prototype.get_next_story_options = function() {
    return this.next_story_options;
};

StoryNode.prototype.get_special_options = function() {
    return this.special_options;
};
