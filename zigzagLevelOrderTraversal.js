
/**
Given a binary tree, return the zigzag level order traversal of its nodes' values. 
(ie, from left to right, then right to left for the next level and alternate between).
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
   
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]

**/

function zigZagLevelOrder(root) {
    var result = [];

    const lot = (root, level) => {
        if (!root) {
            return;
        }
        if (result[level]) {
            result[level].push(root.val);
        } else {
            result[level] = root.val;
        }

        lot(root.left, level + 1);
        lot(root.right, level + 1);
    }

    lot(root, 0);
    return result.map((b, i) =>
        (i % 2) ? b.reverse() : b
    );
}

console.log(zigZagLevelOrder([3, 9, 20, null, null, 15, 7]));