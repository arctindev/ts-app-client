import App from './App';

export default {
  title: 'Layouts/DefaultLayout',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args: any) => <App {...args} />;

export const Default = Template.bind({});
