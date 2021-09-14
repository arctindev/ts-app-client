import { Title } from './Title';

export default {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    titleText: {
      defaultValue: 'This is default title mate',
      control: 'text',
    },
  },
};

const Template = (args: any) => (
  <>
    <Title {...args} />
    <Title {...args} />
    <Title {...args} />
    <Title {...args} />
  </>
);

export const Default = Template.bind({});
