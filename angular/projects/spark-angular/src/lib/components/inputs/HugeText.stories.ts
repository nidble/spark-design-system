import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkHugeInputContainerModule } from './sprk-huge-input-container/sprk-huge-input-container.module';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';


export default {
  title: 'Components/Input/Huge Text',
  component: SparkInputContainerComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">
          <form (submit)="onSubmit($event)" #sampleForm="ngForm">
            ${storyContent}
          </form>
        <div>`
      )
    )
  ],
  props: {
    onSubmit(event): void {
      this.form_submitted = true;
    }
  },
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
    docs: { iframeHeight: 200 },
  }
};

const modules = {
  imports: [
    SprkHugeInputContainerModule,
    SparkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule,
  ],
};

export const hugeTextInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-huge-input-container>
      <input
        placeholder="Placeholder"
        name="text_input_huge"
        type="text"
        [(ngModel)]="text_input_huge"
        required
        #textInput="ngModel"
        sprkInput
      />
      <label sprkLabel>Huge Text Input</label>
      <span [hidden]="textInput.valid || textInput.pristine" sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled-small"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">This field is required.</div>
      </span>
    </sprk-huge-input-container>
  `,
});

hugeTextInput.story = {
  name: 'Default',
};