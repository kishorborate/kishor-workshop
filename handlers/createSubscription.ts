import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

const AWS = require("aws-sdk")
const dynamodb = new AWS.DyanmoDB.DocumentClient()

module.exports = () => {
  
}
export const createSubscription: APIGatewayProxyHandler = async (event, _context) => {
  const params = {
    TableName: null,
              Item:{
      id: someid,
      prop1:,
      Prop2:
    }
  }
  
  dynamoDb.put(params, error => {
    if(error){
      console.error();
      Return Promise.reject
    }else{
    Return Promise.resolve(params.Item);
  }
  });
  
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!',
      input: event,
    }, null, 2),
  };
}
