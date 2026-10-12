export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <cctype>
using namespace std;

using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> a1 = {2,7,11,15};
    vector<int> a2 = {3,2,4};
    vector<int> a3 = {3,3};

    auto r1 = twoSum(a1, 9);
    auto r2 = twoSum(a2, 6);
    auto r3 = twoSum(a3, 6);

    cout << "[" << r1[0] << "," << r1[1] << "]\\n";
    cout << "[" << r2[0] << "," << r2[1] << "]\\n";
    cout << "[" << r3[0] << "," << r3[1] << "]\\n";
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "[0,1]\n[1,2]\n[0,1]"
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <cctype>
using namespace std;

using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here
}

int main() {
    vector<char> s = {'h','e','l','l','o'};
    reverseString(s);
    for(char c : s) cout << c << " ";
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      cpp: "o l l e h\nh a n n a H",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <cctype>
using namespace std;

using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << isPalindrome("A man, a plan, a canal: Panama") << endl;
    cout << isPalindrome("race a car") << endl;
    cout << isPalindrome(" ") << endl;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cpp: "1\n0\n1",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <cctype>
using namespace std;

using namespace std;

int maxSubArray(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a1 = {-2,1,-3,4,-1,2,1,-5,4};
    vector<int> a2 = {1};
    vector<int> a3 = {5,4,-1,7,8};

    cout << maxSubArray(a1) << endl;
    cout << maxSubArray(a2) << endl;
    cout << maxSubArray(a3) << endl;
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      cpp: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <cctype>
using namespace std;

using namespace std;

int maxArea(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> h1 = {1,8,6,2,5,4,8,3,7};
    vector<int> h2 = {1,1};

    cout << maxArea(h1) << endl;
    cout << maxArea(h2) << endl;
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      cpp: "49\n1",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if open brackets are closed by the same type of brackets.",
        "Open brackets must be closed in the correct order.",
        "Every close bracket has a corresponding open bracket of the same type.",
      ],
    },
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'."],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,
      python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False`,
      java: `import java.util.*;

class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <stack>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << isValid("()") << endl;
    cout << isValid("()[]{}") << endl;
    cout << isValid("(]") << endl;
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
      cpp: "1\n1\n0",
    },
  },

  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      notes: [
        "Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
      ],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "In this case, no transactions are done and the max profit = 0.",
      },
      {
        input: "prices = [2,4,1]",
        output: "2",
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0
console.log(maxProfit([2,4,1])); // Expected: 2`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0
print(maxProfit([2,4,1]))  # Expected: 2`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
        System.out.println(maxProfit(new int[]{2,4,1})); // Expected: 2
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> p1 = {7,1,5,3,6,4};
    vector<int> p2 = {7,6,4,3,1};
    vector<int> p3 = {2,4,1};

    cout << maxProfit(p1) << endl;
    cout << maxProfit(p2) << endl;
    cout << maxProfit(p3) << endl;
}`,
    },
    expectedOutput: {
      javascript: "5\n0\n2",
      python: "5\n0\n2",
      java: "5\n0\n2",
      cpp: "5\n0\n2",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Math • Dynamic Programming",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps.",
      notes: ["In how many distinct ways can you climb to the top?"],
    },
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways to climb to the top: 1. 1 step + 1 step, 2. 2 steps.",
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "There are three ways: 1. 1+1+1, 2. 1+2, 3. 2+1.",
      },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3
console.log(climbStairs(5)); // Expected: 8`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3
print(climbStairs(5))  # Expected: 8`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
        System.out.println(climbStairs(5)); // Expected: 8
    }
}`,
      cpp: `#include <iostream>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    return 0;
}

int main() {
    cout << climbStairs(2) << endl;
    cout << climbStairs(3) << endl;
    cout << climbStairs(5) << endl;
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n8",
      python: "2\n3\n8",
      java: "2\n3\n8",
      cpp: "2\n3\n8",
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
      notes: ["You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
        explanation: "9 exists in nums and its index is 4.",
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
        explanation: "2 does not exist in nums so return -1.",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁴",
      "-10⁴ < nums[i], target < 10⁴",
      "All integers in nums are unique.",
      "nums is sorted in ascending order.",
    ],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1
console.log(search([5], 5)); // Expected: 0`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([-1,0,3,5,9,12], 9))  # Expected: 4
print(search([-1,0,3,5,9,12], 2))  # Expected: -1
print(search([5], 5))  # Expected: 0`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2)); // Expected: -1
        System.out.println(search(new int[]{5}, 5)); // Expected: 0
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    // Write your solution here
    return -1;
}

int main() {
    vector<int> n1 = {-1,0,3,5,9,12};
    vector<int> n2 = {5};

    cout << search(n1, 9) << endl;
    cout << search(n1, 2) << endl;
    cout << search(n2, 5) << endl;
}`,
    },
    expectedOutput: {
      javascript: "4\n-1\n0",
      python: "4\n-1\n0",
      java: "4\n-1\n0",
      cpp: "4\n-1\n0",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))  # Expected: True
print(containsDuplicate([1,2,3,4]))  # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))  # Expected: True`,
      java: `import java.util.*;

class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4})); // Expected: false
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2})); // Expected: true
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    // Write your solution here
    return false;
}

int main() {
    vector<int> a1 = {1,2,3,1};
    vector<int> a2 = {1,2,3,4};
    vector<int> a3 = {1,1,1,3,3,4,3,2,4,2};

    cout << containsDuplicate(a1) << endl;
    cout << containsDuplicate(a2) << endl;
    cout << containsDuplicate(a3) << endl;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cpp: "1\n0\n1",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table • Sorting",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
      notes: [
        "An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
      ],
    },
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
      },
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴", "s and t consist of lowercase English letters."],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false
console.log(isAnagram("a", "ab")); // Expected: false`,
      python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))  # Expected: False
print(isAnagram("a", "ab"))  # Expected: False`,
      java: `import java.util.*;

class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car")); // Expected: false
        System.out.println(isAnagram("a", "ab")); // Expected: false
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

bool isAnagram(string s, string t) {
    // Write your solution here
    return false;
}

int main() {
    cout << isAnagram("anagram", "nagaram") << endl;
    cout << isAnagram("rat", "car") << endl;
    cout << isAnagram("a", "ab") << endl;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
      cpp: "1\n0\n0",
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Hash Table • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.',
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: 'The answer is "wke", with the length of 3.',
      },
    ],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴", "s consists of English letters, digits, symbols and spaces."],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))  # Expected: 3`,
      java: `import java.util.*;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int lengthOfLongestSubstring(string s) {
    // Write your solution here
    return 0;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb") << endl;
    cout << lengthOfLongestSubstring("bbbbb") << endl;
    cout << lengthOfLongestSubstring("pwwkew") << endl;
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
      cpp: "3\n1\n3",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "You must write an algorithm that runs in O(n) time and without using the division operation.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
      },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(productExceptSelf([1,2,3,4]))); // Expected: [24,12,8,6]
console.log(JSON.stringify(productExceptSelf([-1,1,0,-3,3]))); // Expected: [0,0,9,0,0]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24, 12, 8, 6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0, 0, 9, 0, 0]`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24, 12, 8, 6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0, 0, 9, 0, 0]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    // Write your solution here
    return {};
}

void printVec(const vector<int>& v) {
    cout << "[";
    for(size_t i = 0; i < v.size(); i++) cout << v[i] << (i + 1 < v.size() ? "," : "");
    cout << "]" << endl;
}

int main() {
    vector<int> a1 = {1,2,3,4};
    vector<int> a2 = {-1,1,0,-3,3};

    printVec(productExceptSelf(a1));
    printVec(productExceptSelf(a2));
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      cpp: "[24,12,8,6]\n[0,0,9,0,0]",
    },
  },

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.",
      notes: [
        "Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
        "You may assume that you have an infinite number of each kind of coin.",
      ],
    },
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
        explanation: "11 = 5 + 5 + 1",
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
      },
      {
        input: "coins = [1], amount = 0",
        output: "0",
      },
    ],
    constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹ - 1", "0 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
  
}

// Test cases
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1
console.log(coinChange([1], 0)); // Expected: 0`,
      python: `def coinChange(coins, amount):
    # Write your solution here
    pass

# Test cases
print(coinChange([1,2,5], 11))  # Expected: 3
print(coinChange([2], 3))  # Expected: -1
print(coinChange([1], 0))  # Expected: 0`,
      java: `import java.util.*;

class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,2,5}, 11)); // Expected: 3
        System.out.println(coinChange(new int[]{2}, 3)); // Expected: -1
        System.out.println(coinChange(new int[]{1}, 0)); // Expected: 0
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int coinChange(vector<int>& coins, int amount) {
    // Write your solution here
    return -1;
}

int main() {
    vector<int> c1 = {1,2,5};
    vector<int> c2 = {2};
    vector<int> c3 = {1};

    cout << coinChange(c1, 11) << endl;
    cout << coinChange(c2, 3) << endl;
    cout << coinChange(c3, 0) << endl;
}`,
    },
    expectedOutput: {
      javascript: "3\n-1\n0",
      python: "3\n-1\n0",
      java: "3\n-1\n0",
      cpp: "3\n-1\n0",
    },
  },

  "find-minimum-in-rotated-sorted-array": {
    id: "find-minimum-in-rotated-sorted-array",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
      notes: ["You must write an algorithm that runs in O(log n) time."],
    },
    examples: [
      {
        input: "nums = [3,4,5,1,2]",
        output: "1",
        explanation: "The original array was [1,2,3,4,5] rotated 3 times.",
      },
      {
        input: "nums = [4,5,6,7,0,1,2]",
        output: "0",
      },
      {
        input: "nums = [11,13,15,17]",
        output: "11",
      },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 5000", "-5000 ≤ nums[i] ≤ 5000", "All elements of nums are unique."],
    starterCode: {
      javascript: `function findMin(nums) {
  // Write your solution here
  
}

// Test cases
console.log(findMin([3,4,5,1,2])); // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log(findMin([11,13,15,17])); // Expected: 11`,
      python: `def findMin(nums):
    # Write your solution here
    pass

# Test cases
print(findMin([3,4,5,1,2]))  # Expected: 1
print(findMin([4,5,6,7,0,1,2]))  # Expected: 0
print(findMin([11,13,15,17]))  # Expected: 11`,
      java: `class Solution {
    public static int findMin(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(findMin(new int[]{3,4,5,1,2})); // Expected: 1
        System.out.println(findMin(new int[]{4,5,6,7,0,1,2})); // Expected: 0
        System.out.println(findMin(new int[]{11,13,15,17})); // Expected: 11
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int findMin(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a1 = {3,4,5,1,2};
    vector<int> a2 = {4,5,6,7,0,1,2};
    vector<int> a3 = {11,13,15,17};

    cout << findMin(a1) << endl;
    cout << findMin(a2) << endl;
    cout << findMin(a3) << endl;
}`,
    },
    expectedOutput: {
      javascript: "1\n0\n11",
      python: "1\n0\n11",
      java: "1\n0\n11",
      cpp: "1\n0\n11",
    },
  },

  "house-robber": {
    id: "house-robber",
    title: "House Robber",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.",
      notes: [
        "Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "4",
        explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 1 + 3 = 4.",
      },
      {
        input: "nums = [2,7,9,3,1]",
        output: "12",
        explanation: "Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total = 2 + 9 + 1 = 12.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 400"],
    starterCode: {
      javascript: `function rob(nums) {
  // Write your solution here
  
}

// Test cases
console.log(rob([1,2,3,1])); // Expected: 4
console.log(rob([2,7,9,3,1])); // Expected: 12
console.log(rob([2,1,1,2])); // Expected: 4`,
      python: `def rob(nums):
    # Write your solution here
    pass

# Test cases
print(rob([1,2,3,1]))  # Expected: 4
print(rob([2,7,9,3,1]))  # Expected: 12
print(rob([2,1,1,2]))  # Expected: 4`,
      java: `class Solution {
    public static int rob(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(rob(new int[]{1,2,3,1})); // Expected: 4
        System.out.println(rob(new int[]{2,7,9,3,1})); // Expected: 12
        System.out.println(rob(new int[]{2,1,1,2})); // Expected: 4
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int rob(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a1 = {1,2,3,1};
    vector<int> a2 = {2,7,9,3,1};
    vector<int> a3 = {2,1,1,2};

    cout << rob(a1) << endl;
    cout << rob(a2) << endl;
    cout << rob(a3) << endl;
}`,
    },
    expectedOutput: {
      javascript: "4\n12\n4",
      python: "4\n12\n4",
      java: "4\n12\n4",
      cpp: "4\n12\n4",
    },
  },

  "longest-consecutive-sequence": {
    id: "longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    difficulty: "Medium",
    category: "Array • Hash Table",
    description: {
      text: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
      notes: ["You must write an algorithm that runs in O(n) time."],
    },
    examples: [
      {
        input: "nums = [100,4,200,1,3,2]",
        output: "4",
        explanation: "The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.",
      },
      {
        input: "nums = [0,3,7,2,5,8,4,6,0,1]",
        output: "9",
      },
    ],
    constraints: ["0 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function longestConsecutive(nums) {
  // Write your solution here
  
}

// Test cases
console.log(longestConsecutive([100,4,200,1,3,2])); // Expected: 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // Expected: 9
console.log(longestConsecutive([])); // Expected: 0`,
      python: `def longestConsecutive(nums):
    # Write your solution here
    pass

# Test cases
print(longestConsecutive([100,4,200,1,3,2]))  # Expected: 4
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))  # Expected: 9
print(longestConsecutive([]))  # Expected: 0`,
      java: `import java.util.*;

class Solution {
    public static int longestConsecutive(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(longestConsecutive(new int[]{100,4,200,1,3,2})); // Expected: 4
        System.out.println(longestConsecutive(new int[]{0,3,7,2,5,8,4,6,0,1})); // Expected: 9
        System.out.println(longestConsecutive(new int[]{})); // Expected: 0
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
#include <algorithm>
using namespace std;

int longestConsecutive(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a1 = {100,4,200,1,3,2};
    vector<int> a2 = {0,3,7,2,5,8,4,6,0,1};
    vector<int> a3 = {};

    cout << longestConsecutive(a1) << endl;
    cout << longestConsecutive(a2) << endl;
    cout << longestConsecutive(a3) << endl;
}`,
    },
    expectedOutput: {
      javascript: "4\n9\n0",
      python: "4\n9\n0",
      java: "4\n9\n0",
      cpp: "4\n9\n0",
    },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers • Stack",
    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: [],
    },
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation: "The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped.",
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
      },
    ],
    constraints: ["n == height.length", "1 ≤ n ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here
  
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9
console.log(trap([3,0,2,0,4])); // Expected: 7`,
      python: `def trap(height):
    # Write your solution here
    pass

# Test cases
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6
print(trap([4,2,0,3,2,5]))  # Expected: 9
print(trap([3,0,2,0,4]))  # Expected: 7`,
      java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // Expected: 6
        System.out.println(trap(new int[]{4,2,0,3,2,5})); // Expected: 9
        System.out.println(trap(new int[]{3,0,2,0,4})); // Expected: 7
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int trap(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> h1 = {0,1,0,2,1,0,1,3,2,1,2,1};
    vector<int> h2 = {4,2,0,3,2,5};
    vector<int> h3 = {3,0,2,0,4};

    cout << trap(h1) << endl;
    cout << trap(h2) << endl;
    cout << trap(h3) << endl;
}`,
    },
    expectedOutput: {
      javascript: "6\n9\n7",
      python: "6\n9\n7",
      java: "6\n9\n7",
      cpp: "6\n9\n7",
    },
  },

  "first-missing-positive": {
    id: "first-missing-positive",
    title: "First Missing Positive",
    difficulty: "Hard",
    category: "Array • Hash Table",
    description: {
      text: "Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.",
      notes: ["You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space."],
    },
    examples: [
      {
        input: "nums = [1,2,0]",
        output: "3",
        explanation: "The numbers in the range [1,2] are all in the array.",
      },
      {
        input: "nums = [3,4,-1,1]",
        output: "2",
        explanation: "1 is in the array but 2 is missing.",
      },
      {
        input: "nums = [7,8,9,11,12]",
        output: "1",
        explanation: "The smallest positive integer 1 is missing.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function firstMissingPositive(nums) {
  // Write your solution here
  
}

// Test cases
console.log(firstMissingPositive([1,2,0])); // Expected: 3
console.log(firstMissingPositive([3,4,-1,1])); // Expected: 2
console.log(firstMissingPositive([7,8,9,11,12])); // Expected: 1`,
      python: `def firstMissingPositive(nums):
    # Write your solution here
    pass

# Test cases
print(firstMissingPositive([1,2,0]))  # Expected: 3
print(firstMissingPositive([3,4,-1,1]))  # Expected: 2
print(firstMissingPositive([7,8,9,11,12]))  # Expected: 1`,
      java: `class Solution {
    public static int firstMissingPositive(int[] nums) {
        // Write your solution here
        
        return 1;
    }
    
    public static void main(String[] args) {
        System.out.println(firstMissingPositive(new int[]{1,2,0})); // Expected: 3
        System.out.println(firstMissingPositive(new int[]{3,4,-1,1})); // Expected: 2
        System.out.println(firstMissingPositive(new int[]{7,8,9,11,12})); // Expected: 1
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int firstMissingPositive(vector<int>& nums) {
    // Write your solution here
    return 1;
}

int main() {
    vector<int> a1 = {1,2,0};
    vector<int> a2 = {3,4,-1,1};
    vector<int> a3 = {7,8,9,11,12};

    cout << firstMissingPositive(a1) << endl;
    cout << firstMissingPositive(a2) << endl;
    cout << firstMissingPositive(a3) << endl;
}`,
    },
    expectedOutput: {
      javascript: "3\n2\n1",
      python: "3\n2\n1",
      java: "3\n2\n1",
      cpp: "3\n2\n1",
    },
  },

  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    category: "String • Dynamic Programming",
    description: {
      text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
      notes: [
        "You have the following three operations permitted on a word:",
        "Insert a character",
        "Delete a character",
        "Replace a character",
      ],
    },
    examples: [
      {
        input: 'word1 = "horse", word2 = "ros"',
        output: "3",
        explanation: "horse -> rorse (replace 'h' with 'r') -> rose (remove 'r') -> ros (remove 'e')",
      },
      {
        input: 'word1 = "intention", word2 = "execution"',
        output: "5",
        explanation: "intention -> inention (remove 't') -> enention (replace 'i' with 'e') -> exention (replace 'n' with 'x') -> exection (replace 'n' with 'c') -> execution (insert 'u')",
      },
    ],
    constraints: ["0 ≤ word1.length, word2.length ≤ 500", "word1 and word2 consist of lowercase English letters."],
    starterCode: {
      javascript: `function minDistance(word1, word2) {
  // Write your solution here
  
}

// Test cases
console.log(minDistance("horse", "ros")); // Expected: 3
console.log(minDistance("intention", "execution")); // Expected: 5
console.log(minDistance("", "a")); // Expected: 1`,
      python: `def minDistance(word1, word2):
    # Write your solution here
    pass

# Test cases
print(minDistance("horse", "ros"))  # Expected: 3
print(minDistance("intention", "execution"))  # Expected: 5
print(minDistance("", "a"))  # Expected: 1`,
      java: `class Solution {
    public static int minDistance(String word1, String word2) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(minDistance("horse", "ros")); // Expected: 3
        System.out.println(minDistance("intention", "execution")); // Expected: 5
        System.out.println(minDistance("", "a")); // Expected: 1
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int minDistance(string word1, string word2) {
    // Write your solution here
    return 0;
}

int main() {
    cout << minDistance("horse", "ros") << endl;
    cout << minDistance("intention", "execution") << endl;
    cout << minDistance("", "a") << endl;
}`,
    },
    expectedOutput: {
      javascript: "3\n5\n1",
      python: "3\n5\n1",
      java: "3\n5\n1",
      cpp: "3\n5\n1",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};
