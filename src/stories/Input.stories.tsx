import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input/Input.js";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
    clearable: true,
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter number...",
    clearable: true, 
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
    clearable: true,
  },
};
