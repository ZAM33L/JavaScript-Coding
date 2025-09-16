var recoverOrder = function(order, friends) {
    const pos = new Map();
    for (let i = 0; i < order.length; i++) {
        pos.set(order[i], i);
    }
    friends.sort((a, b) => pos.get(a) - pos.get(b));
    return friends;
};