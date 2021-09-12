import MobileNav from './MobileNav';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Components/MobileNav',
  component: MobileNav,
};

const Template = (args: any) => (
  <Router>
    <MobileNav {...args} />
  </Router>
);

export const Default = Template.bind({});
