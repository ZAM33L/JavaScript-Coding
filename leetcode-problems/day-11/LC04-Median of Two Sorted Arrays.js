var findMedianSortedArrays = function(nums1, nums2) {
    let concat = nums1.concat(nums2);
    let sortedConcat = concat.sort((a, b) => a - b);
    let l = sortedConcat.length;
    if (l % 2 === 1) {
        return sortedConcat[Math.floor(l / 2)];
    } else {
        return (sortedConcat[l / 2 - 1] + sortedConcat[l / 2]) / 2;
    }
};