const fs = require("fs");
const { execSync } = require("child_process");
const axios = require("axios");
require("dotenv").config();

// get the branch Name
const branchname_cli = "git rev-parse --abbrev-ref HEAD";
const repoName_cli = "basename `git rev-parse --show-toplevel`";

const branchName = execSync(branchname_cli, { encoding: "utf-8" }).trim();
const repoName = execSync(repoName_cli, { encoding: "utf-8" }).trim();

// File path
const filePath = "./report.json";

// Read content from the JSON file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    // Parse the JSON content to a JavaScript object
    const jsonObject = JSON.parse(data);

    let result = {
      passedIssues: [],
      branchName,
      repoName,
    };

    jsonObject.testResults.forEach((test) => {
      if (test.status === "failed") return;

      const match = test["name"].match(/issue_(\d+)\.test\.js/);
      result.passedIssues.push(match[1]);
    });

    console.log("Results >> ", result)

    if (result.passedIssues.length > 0) {
      //   const updatedJsonString = JSON.stringify(result);
      axios.post(`${process.env.BACKEND_API}/hackathon/issue-resolved`, {
        ...result
      }).then(() => console.log("updated successfully")).catch(err => console.log("error in submission"));
      console.log(JSON.stringify(result))

    }

    // Convert the modified object back to JSON format
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError);
  }
});
