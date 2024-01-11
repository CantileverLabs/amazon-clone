let branchName = process.argv[2];
console.log(branchName)

let branchRegex = /\d+-[0-9a-fA-F]{24}$/g;

console.log(branchRegex.test(branchName));
