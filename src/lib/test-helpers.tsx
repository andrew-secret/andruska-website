import * as shallowRenderer from 'react-test-renderer/shallow';
import { shallow, configure, ShallowWrapper } from 'enzyme';

import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export type TestComponent = React.ReactElement<any>;

export const noOpFn = (): any => void 0;

// Renders component shallow with enzyme and lets you make assertions
export function renderComponentShallow(
  component: TestComponent
): ShallowWrapper {
  return shallow(component);
}

// Renders component shallow with react-test-renderer for snapshot tests
export function renderComponentShallowForSnapshot(component: TestComponent) {
  return shallowRenderer.createRenderer().render(component);
}
