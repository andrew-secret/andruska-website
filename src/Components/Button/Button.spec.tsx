import * as React from 'react';
import {
  renderComponentShallow,
  renderComponentShallowForSnapshot,
} from '../../lib/test-helpers';
import { Button } from './Button';

describe('Button', () => {
  it('Button renders correctly', () => {
    const wrapper = renderComponentShallow(
      <Button label="some button" type="button" />
    );
  });
  it('renders with snapshots', () => {
    const tree = renderComponentShallowForSnapshot(
      <Button label="some button" type="submit" />
    );
    expect(tree).toMatchSnapshot();
  });
});
