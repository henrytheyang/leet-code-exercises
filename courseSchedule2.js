/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must 
take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid 
answers, return any of them. If it is impossible to finish all courses, return an empty array.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished 
course 0. So the correct course order is [0,1].
Example 2:

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished 
both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
Example 3:

Input: numCourses = 1, prerequisites = []
Output: [0]
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  // Build prereq graph
  // Iterate through indices of prereq graph
  // Recursively explore all nodes in DFS
  // Track for double visits; if we encounter loop break and return []
  // If we reach a node that has 0 prereqs, add to answer order, remember that it's used
  // Return up a level, pop that prereq off the list, remove visited tag
  let answer = [];
  let addedToAnswer = new Array(numCourses).fill(false);
  let loopDetector = [...addedToAnswer];
  let graph = new Array(numCourses).fill(0).map(element => new Array);
  for (let i = 0; i < prerequisites.length; i++) {
    graph[prerequisites[i][0]].push(prerequisites[i][1]);
  }
  const dfs = (node) => {
    if (loopDetector[node] === true) return false; // order?
    if (addedToAnswer[node] === true) return true;

    loopDetector[node] = true;
    // Iterate through list of dependencies if they exist
    for (let j = graph[node].length - 1; j >= 0; j--) {
      // let nextNode = graph[node][j];
      let nextNode = graph[node].pop();
      if (dfs(nextNode) === false) return answer;
    }
    loopDetector[node] = false;
    if (graph[node].length === 0) { // Detect end of depenedency line
      answer.push(node);
      addedToAnswer[node] = true;
    }
  }

  for (let k = 0; k < numCourses; k++) {
    if (dfs(k) === false) return [];
  }

  return answer;
};
findOrder(2, [[0,1],[1,0]]);

/*
Input:
2
prerequisites =
[[0,1],[1,0]]
22 / 45 testcases passed
Output
[0]
Expected
[]
*/
