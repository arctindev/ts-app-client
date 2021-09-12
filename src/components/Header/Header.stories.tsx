import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args: any) => <Header {...args} />;

export const Default = Template.bind({});
