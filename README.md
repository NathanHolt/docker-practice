To start use of docker navigate to *container* folder and run the following command: **docker-compose up**

This template is specifically set up for DynamoDB. If you want to practive any other AWS services you would need to change the *yaml* file in the *container* folder.

Then navigate to the *application* folder and eun the following command: **npm add @aws-sdk/client-dynamodb** 
Now open the *app.js* file. The config has already been set up for you. You just need to add any code you want and run **node app.js**

For code examples please use this resource: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_dynamodb_code_examples.html

Remember to double check if your docker container is running by using Docker Desktop if the *app.js* file is throwing errors. 
