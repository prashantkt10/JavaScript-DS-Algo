//Sets program
function mySet() {
    // the var collection will hold the set
    var collection = [];

    //this method will check for the presence of an element and return true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    }

    //this method will return all values in the set
    this.values = function () {
        return collection;
    }

    //this method will add an element to the set
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
    }

    //this method will remove an element from the set
    this.remove = function (element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    // this method will return the size of collection
    this.size = function () {
        return collection.length;
    }

    //this method will return the union of two sets
    this.union = function (otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e);
        });
        secondSet.forEach(function (e) {
            unionSet.add(e);
        });
        return unionSet;
    }

    this.intersection = function (otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    this.difference = function (otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    this.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function () {
            return otherSet.has(value);
        });
    }
}