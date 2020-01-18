import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, color } from "@storybook/addon-knobs/react";

// export default {
//   title: "Test"
// };

// export const test = () => (
//   <textarea onClick={action("clicked")}>
//     Hong test textarea in storybook
//   </textarea>
// );

storiesOf("Storybook Knobs", module)
  .addDecorator(withKnobs)

  .add("with a button", () => (
    <button
      disabled={boolean("Disabled", false)}
      style={{ backgroundColor: color("Color", "red") }}
    >
      {text("Label", "Hi guys")}
    </button>
  ))

  .add("as dynamic variables", () => {
    const name = text("Name", "Hong");
    const content = `Hi I'm ${name}. Nice to meet you!`;

    return <div>{content}</div>;
  });
