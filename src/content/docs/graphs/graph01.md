---
title: Number of Islands
---
### Problem Statement
Given a 2D grid `grid` where `'1'` represents land and `'0'` represents water, count and return the number of islands.

An **island** is formed by connecting adjacent lands horizontally or vertically and is surrounded by water. You may assume water is surrounding the grid (i.e., all the edges are water).

**Example 1:**

```java
Input: grid = [
    ["0","1","1","1","0"],
    ["0","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
Output: 1
```

**Example 2:**

```java
Input: grid = [
    ["1","1","0","0","1"],
    ["1","1","0","0","1"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
Output: 4
```

**Constraints:**

- `1 <= grid.length, grid[i].length <= 100`
- `grid[i][j]` is `'0'` or `'1'`.

### Solution

```cpp
class Solution {
private:
    int directions[4][2] = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};
    void bfs(int r, int c, vector<vector<char>>& grid) {
        grid[r][c] = '0';
        queue<pair<int, int>> q;
        q.push({r, c});

        while (!q.empty()) {
            auto v = q.front(); q.pop();
            for(int i=0; i<4; i++) {
                int nr = v.first + directions[i][0];
                int nc = v.second + directions[i][1];
                if(nr >=0 && nc >= 0 && nr < grid.size()
                    && nc < grid[0].size() && grid[nr][nc]=='1') {
                        q.push({nr, nc});
                        grid[nr][nc] = '0';
                    }
            }
        }
    }
public:
    int numIslands(vector<vector<char>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
    
        int islands = 0;
        for(int i=0; i<m; i++) {
            for(int j=0; j<n; j++) {
                if (grid[i][j] == '1') {
                    islands++;
                    bfs(i, j, grid);
                }
            }
        }
        return islands;
    }
};
```

**Complexity Analysis**
+ Time Complexity : *O(mn)*
+ Space Complexity : *O(mn)*

```cpp
class Solution {
private:
    int directions[4][2] = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};
    void dfs(int r, int c, vector<vector<char>>& grid) {
        grid[r][c] = '0';
        
        for(int i=0; i<4; i++) {
            int nr = r + directions[i][0];
            int nc = c + directions[i][1];
            if (nr >= 0 && nc >=0 &&
                nr < grid.size() && nc < grid[0].size() &&
                grid[nr][nc] == '1') {
                    dfs(nr, nc, grid);
                }
        }
    }
public:
    int numIslands(vector<vector<char>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
    
        int islands = 0;
        for(int i=0; i<m; i++) {
            for(int j=0; j<n; j++) {
                if (grid[i][j] == '1') {
                    islands++;
                    dfs(i, j, grid);
                }
            }
        }
        return islands;
    }
};
```