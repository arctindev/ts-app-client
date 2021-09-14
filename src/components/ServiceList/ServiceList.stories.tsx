import ServiceList from './ServiceList';

export default {
  title: 'Components/ServiceList',
  component: ServiceList,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args: any) => <ServiceList {...args} />;

export const Default = Template.bind({});
