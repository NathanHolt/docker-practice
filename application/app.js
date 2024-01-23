const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({
  region: 'us-west-2',
  endpoint: 'http://localhost:8000/',
  credentials: {
    accessKeyId: 'xxx',
    secretAccessKey: 'yyy',
  },});

 const main = async () => {
  console.log("Code to run goes here")
};

main()
// Run "node app.js"