#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaLayersTypescriptStack } from '../lib/lambda-layers-typescript-stack';

const app = new cdk.App();
new LambdaLayersTypescriptStack(app, 'LambdaLayersTypescriptStack');
