var Node = function(object) {
    for (var key in object) {
        this[key] = object[key];
    }
};

var Nodelist = function(k) {
    this.nodes = [];
    this.k = k;
};

Nodelist.prototype.add = function(node) {
    this.nodes.push(node);
};



// for testing
var object = {
    "type":"apartment",
    "area":10,
    "rooms":12
};
var test = new Node(object);
