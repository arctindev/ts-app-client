import LoginForm from './LoginForm';

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args: any) => <LoginForm {...args} />;

export const Default = Template.bind({});
