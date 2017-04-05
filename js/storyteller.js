

/*
 * Good Reference for defining Javascript Objects/Classes
 * http://www.phpied.com/3-ways-to-define-a-javascript-class/
 */

function StoryTeller() {
    this.story = null;
    this.user = null;
    this.json_story = null;
    this.process_json_story = function (json_story) {
        this.json_story = json_story;
    }
}

StoryTeller.prototype.get_json_story = function(){
    this.json_story = httpGet("https://raw.githubusercontent.com/afterthought325/LoneForest/master/Story.json");
};

StoryTeller.prototype.process_json_story = function (json_story) {
    this.json_story = json_story;
};