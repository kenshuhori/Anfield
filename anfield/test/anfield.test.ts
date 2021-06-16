import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Anfield from '../lib/anfield-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Anfield.AnfieldStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
