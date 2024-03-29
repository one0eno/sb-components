import { MyLabel } from '../../components/MyLabel';
import { Props } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';
export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: 'normal',
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  allCaps: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary', // primary  | secondary | terciary
};
export const Terciary = Template.bind({});
Terciary.args = {
  size: 'normal',
  color: 'tertiary',
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  fontColor: '',
};
