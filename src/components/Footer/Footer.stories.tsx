import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args: any) => <Footer {...args} />;

export const Default = Template.bind({});
