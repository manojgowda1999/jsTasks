// 1. Functions and Expressions
// Scenario: You are developing a system to manage and analyze election data for the 2024 elections.
// Question:
// Write a function expression named calculateVotes that takes three arguments: candidateName, votes, and region.
//  This function should return a formatted string with the candidate's name, the number of votes, and the region.


function calculateVotes (candidateName, votes,region) {
    return 'Person Name : ' + candidateName+ ' ,' + 'Votess : ' + " " + votes + " ," + " Region Name : " + region
}
console.log(calculateVotes("manoj",1,"IND"));

// 2. Recursive Functions
// Scenario: To ensure the election data is accurate, you need to verify the votes from multiple sources.

// Question:
// Write a recursive function named verifyVotes that takes an array of vote counts from different sources and
//
const votes = [10, 504, 534, 1340, 3400];

const verifyVotes = function (votesArr, index = 0) {
    // Base case: if the index reaches the length of the array, return 0
    if (index === votesArr.length) {
        return 0;
    }
    // Recursive case: sum the current vote count and the sum of the rest
    return votesArr[index] + verifyVotes(votesArr, index + 1);
};

const totalVotes = verifyVotes(votes);

console.log(totalVotes);





// 3. Rest Parameters
// Scenario: Sometimes, you receive votes from an unknown number of regions.
// Question:
// Write a function named totalVotes that uses rest parameters to accept any number of arguments
//  representing votes from different regions.
//  The function should return the sum of all the votes.


function totalVts (...args){
    var sum = 0
    for(let x of args){
 sum += x
    }
    console.log(sum);
}
console.log(totalVts(10,20,30));

// 4. Arrow Functions
// Scenario: You need to quickly filter and analyze the election data using modern ES6 features.

// Question:
// Create an arrow function named filterCandidates that takes an array of candidate objects and a threshold number of votes.
//  It should return an array of candidate names who have more votes than the threshold.



const filterCandidates = (candidates, threshold) => {
    const result = [];
    candidates.forEach(candidate => {
        if (candidate.votes > threshold) {
            result.push(candidate.name);
        }
    });
    return result;
};
const candidates = [
    { name: 'Manoj', votes: 1200 },
    { name: 'divya shree', votes: 800 },
    { name: 'kala', votes: 1500 },
    { name: 'srinika', votes: 500 }
];

const threshold = 1000;
const result = filterCandidates(candidates, threshold);
console.log(result); 
// output manoj, kala

// 5. Combining Concepts
// Scenario: For a comprehensive analysis, you need to write a function that integrates all the concepts mentioned above.

// Question:
// Write a function named analyzeElection that accepts a threshold number of votes and any number of 
// candidate objects using rest parameters. Each candidate object has a name and votes. Use an arrow function to 
// filter candidates based on the threshold and a recursive function to calculate the total votes of the filtered candidates. 
// The function should return an object containing the filtered candidates' names and the total votes.

// Define the voters array with modified voter names
const voters = [
    { voterName: "sunil", votes: 5400 },
    { voterName: "karrthik", votes: 6700 },
    { voterName: "siri", votes: 1500 },
    { voterName: "kamal", votes: 4000 }
];

// Helper function to filter voters based on threshold
const filterVoters = (voters, threshold) => {
    return voters.filter(voter => voter.votes > threshold);
};

// Helper function to calculate the sum of votes
const sumOfVotes = (...votes) => {
    return votes.reduce((sum, vote) => sum + vote, 0);
};

// Main function to analyze election
const analyzeElection = (threshold, voters) => {
    const filteredVoters = filterVoters(voters, threshold);
    const votesArr = filteredVoters.map(e => e.votes);
    const totalVotes = sumOfVotes(...votesArr);
    const voterNames = filteredVoters.map(e => e.voterName);
    return {
        voterNames,
        totalVotes
    };
};

// Call analyzeElection function with the threshold and voters array
const resultAnalysis = analyzeElection(2000, voters);
console.log(resultAnalysis); 
// Output: { voterNames: [ 'Srinitha', 'Srikanth', 'Sri' ], totalVotes: 16100 }

console.log(analyzeElection(3000, voters)); 
// Output: { voterNames: [ 'Srinitha', 'Srikanth', 'Sri' ], totalVotes: 16100 }

console.log(analyzeElection(1000, voters)); 
// Output: { voterNames: [ 'Srinitha', 'Srikanth', 'Srini', 'Sri' ], totalVotes: 17600 }























