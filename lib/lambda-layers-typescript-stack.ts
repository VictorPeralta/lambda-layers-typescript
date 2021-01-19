import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class LambdaLayersTypescriptStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const testLayer = new lambda.LayerVersion(this, "testLayer", {
      code: lambda.Code.fromAsset("src/testLayer"),
      compatibleRuntimes: [lambda.Runtime.NODEJS_10_X],
    });
    
    const testFunction = new lambda.Function(this, "testLambda", {
      code: lambda.Code.fromAsset("src/testLambda"),
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: "index.handler",
      layers: [testLayer],
    });  
  }
}
