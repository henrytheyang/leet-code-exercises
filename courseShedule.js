/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You 
are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take 
course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have 
finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  // If there's a loop present it'll be impossible, otherwise it can be possible
  // Iterate through prereqs, mapping courses prereqs. Store prereqs at course array index
  // Start through map
    // Record visit, and look at prereq
      // If we reach a node with an empty set, that's the end of the line
      // Bubble up, check off that branch as true. Go down the other branch
  // If we can travel through the whole map and mark all nodes as true, return true

  // Track if we created a loop by tracking visited nodes, if yes return false;
  let map = new Array(numCourses).fill(0).map(element => new Array); // Map structure: index is class, value is prereq course
  let visited = new Array(numCourses.length);

  for (let i = 0; i < prerequisites.length; i++) {
    map[prerequisites[i][0]].push(prerequisites[i][1]);
  }

  const mapCrawl = (startingNode) => {
    if (visited[startingNode] === true) return false; // loop detector
    if (map[startingNode].length === 0) return true; // if prereqs empty it's the end of the line, no further prereqs

    visited[startingNode] = true;
    for (let i = map[startingNode].length - 1; i >= 0; i--) {
      if (mapCrawl(map[startingNode][i]) === false) return false;
    }
    visited[startingNode] = false;
    map[startingNode].pop();
    return true;
  }

  for (let j = 0; j < numCourses; j++) {
    if (mapCrawl(j) === false) return false;
  }

  return true;
};

canFinish(2, [[1,0],[0,1]])
/*
numCourses = 2, prerequisites = [[1,0],[0,1]]
*/

