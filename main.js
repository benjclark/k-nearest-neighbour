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

Nodelist.prototype.calculateRanges = function() {
    this.areas = {min: 1000000, max: 0};
    this.rooms = {min: 1000000, max: 0};

    for (var i in this.nodes) {
        if (this.nodes[i].rooms < this.rooms.min) {
            this.rooms.min = this.nodes[i].rooms;
        }
        if (this.nodes[i].rooms > this.rooms.max) {
            this.rooms.max = this.nodes[i].rooms;
        }
        if (this.nodes[i].area < this.area.min) {
            this.area.min = this.nodes[i].area;
        }
        if (this.nodes[i].area > this.area.max) {
            this.area.max = this.nodes[i].area;
        }
    }
}


// for testing
var object = {
    "type":"apartment",
    "area":10,
    "rooms":12
};
var test = new Node(object);
