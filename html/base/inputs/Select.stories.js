import { useEffect } from '@storybook/client-api';
import { requiredSelect } from '../requiredSelect';

export default {
  title: 'Components/Input/Select',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const selectBox = () => {
  useEffect(() => {
    requiredSelect();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <label
        for="select"
        class="sprk-b-Label"
      >
        Select Box Label
      </label>

      <select
        class="sprk-b-Select"
        id="select"
        data-id="select"
        aria-describedby="select--error-container"
      >
        <option value="not-selected">Make a selection...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <optgroup label="Grouped Options">
          <option value="g1">Grouped Option 1</option>
          <option value="g2">Grouped Option 2</option>
          <option value="g3">Grouped Option 3</option>
        </optgroup>
      </select>

      <svg
        class="
          sprk-c-Icon
          sprk-c-Icon--stroke-current-color
          sprk-b-SelectContainer__icon
        "
        viewBox="0 0 64 64"
      >
        <use xlink:href="#chevron-down" />
      </svg>

      <div
        class="sprk-b-ErrorContainer"
        id="select--error-container"
      ></div>
    </div>
  `;
};

selectBox.story = {
  name: 'Default',
};