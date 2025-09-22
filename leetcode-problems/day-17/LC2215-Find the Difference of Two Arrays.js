//set difference
var findDifference = function(nums1, nums2) {
    let n1Set = new Set(nums1)
    let n2Set = new Set(nums2)

    let r1 = new Set()
    let r2 = new Set()

    for (let n1 of nums1) {
        if (!n2Set.has(n1)) {
            r1.add(n1)
        }
    }

    for (let n2 of nums2) {
        if (!n1Set.has(n2)) {
            r2.add(n2)
        }
    }

    let r1Arr = [...r1]
    let r2Arr = [...r2]

    return [r1Arr, r2Arr]
};