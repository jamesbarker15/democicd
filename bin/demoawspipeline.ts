#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DemoawspipelineStack } from '../lib/demoawspipeline-stack';

const app = new cdk.App();
new DemoawspipelineStack(app, 'DemoawspipelineStack', {
  env: { account: '197150636606', region: 'eu-west-1'}
  
})