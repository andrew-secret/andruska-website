import * as React from 'react';
import { renderComponentShallowForSnapshot } from '../../lib/test-helpers';
import { Input } from './Input';

describe('Input', () => {
  it('Input name renders correctly', () => {
    const tree = renderComponentShallowForSnapshot(
      <Input label="some label" type="name" />
    );
    expect(tree).toMatchSnapshot();
  });
  it('Input text renders correctly', () => {
    const tree = renderComponentShallowForSnapshot(
      <Input label="some label" type="text" />
    );
    expect(tree).toMatchSnapshot();
  });
  it('Input email renders correctly', () => {
    const tree = renderComponentShallowForSnapshot(
      <Input label="some label" type="text" />
    );
    expect(tree).toMatchSnapshot();
  });
  it('Input is required renders correctly', () => {
    const tree = renderComponentShallowForSnapshot(
      <Input label="some label" type="text" required />
    );
    expect(tree).toMatchSnapshot();
  });
  it('Input with className renders correctly', () => {
    const tree = renderComponentShallowForSnapshot(
      <Input label="some label" type="text" className="someClass" />
    );
    expect(tree).toMatchSnapshot();
  });
});
