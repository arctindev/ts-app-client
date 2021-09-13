import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args: any) => <Header {...args} />;

export const Default = Template.bind({});
