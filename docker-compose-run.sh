#!/bin/bash

aws_access_key_id=`aws configure get aws_access_key_id`
aws_secret_access_key=`aws configure get aws_secret_access_key`
export AWS_ACCESS_KEY_ID=$aws_access_key_id
export AWS_SECRET_ACCESS_KEY=$aws_secret_access_key
export AWS_DEFAULT_REGION=ap-northeast-1
export AWS_DEFAULT_OUTPUT=json

docker-compose run --rm aws-cdk /bin/bash
