var isAnagram = function(s, t) {
    let s1=s.split('').sort()
    let t1=t.split('').sort()
    return s1.toString() == t1.toString()
};