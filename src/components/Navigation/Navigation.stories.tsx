import Navigation from './Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args: any) => (
  <Router>
    <Navigation {...args} />
  </Router>
);

export const Default = Template.bind({});
