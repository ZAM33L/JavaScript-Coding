var isSymmetric = function (root) {
    if (!root) return true
    function isMirror(p, q) {
        if (!p && !q) return true
        if (!p || !q) return false
        if (p.val !== q.val) return false
        return isMirror(p.left, q.right) && isMirror(p.right, q.left)
    }
    return isMirror(root.left,root.right)
};