import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region:"ap-northeast-2",
  credentials: {
    accessKeyId:"",
    secretAccessKey:""
  }
})

const docClient = DynamoDBDocument.from(client);

export { docClient, PutCommand }