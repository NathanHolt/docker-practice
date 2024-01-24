import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000/',
});

 const main = async () => {
  console.log("I am alive!!!")
};

main()
// Run "node app.js"