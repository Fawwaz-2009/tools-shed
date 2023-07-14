import type { Meta, StoryObj } from "@storybook/react";

import { ContainerAvatar } from "./avatar-uploader";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ContainerAvatar> = {
  title: "Blocks/Uploader/Avatar",
  component: ContainerAvatar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ContainerAvatar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Avatar: Story = {
  args: {},
};
