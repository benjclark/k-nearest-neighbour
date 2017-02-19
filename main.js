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


// TODO: abstract this so properties like 'areas' and 'rooms' are not hard-coded
Nodelist.prototype.calculateRanges = function() {
    this.areas = {min: 1000000, max: 0};
    this.rooms = {min: 1000000, max: 0};

    // if less than initial min then set min
    // if greater than initial max then set max
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
};

// If the node is an unknown type, clone the nodes list and then measure distances.

Nodelist.prototype.determineUnknown = function() {
    // normalise the data ranges
    this.calculateRanges();

    // go through each of our nodes
    for (var i in this.nodes) {
        // if the node doesnt have a type (i.e. apartment, flat, house)
        if (! this.nodes[i].type) {

            // clone the node list
            this.nodes[i].neighbours = [];
            for (var j in this.nodes) {
                if (! this.nodes[j].type) {
                    continue;
                }
                this.nodes[i].neighbours.push(new Node(this.nodes[j]));
            }

            // measure distances
            this.nodes[i].measureDistances(this.areas, this.rooms);

            // sort nodes by distance
            this.nodes[i].sortByDistance();

            // guess the type
            console.log(this.nodes[i].guessType(this.k));
        }
    }
};

// for testing
var object = {
    "type":"apartment",
    "area":10,
    "rooms":12
};
var node = new Node(object);
var nodeList = new Nodelist(3);
