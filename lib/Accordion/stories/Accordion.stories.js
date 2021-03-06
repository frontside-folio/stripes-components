import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Readme from '../readme.md';
import BasicUsage from './BasicUsage';
import Accordion from '../Accordion';
import AccordionSet from '../AccordionSet';
import Status from './Status';
import ExpandAllWithin from './ExpandAllWithinSet';

const as = {
  acc1: false,
  acc2: false,
  acc3: false,
  acc4: false,
};

storiesOf('Accordion', module)
  .addDecorator(withReadme(Readme))
  .add('with defaults', () => <BasicUsage />)
  .add('Accordion Status', () => <Status />)
  .add('Keyboard Navigation', () => (
    <AccordionSet accordionStatus={as}>
      <Accordion label="Up Arrow" id="acc1">
        Content
      </Accordion>
      <Accordion label="Down Arrow" id="acc2">
        Content
      </Accordion>
      <Accordion label="Home" id="acc3">
        Content
      </Accordion>
      <Accordion label="End" id="acc4">
        Content
      </Accordion>
    </AccordionSet>
  ))
  .add('displayWhen- props', () => (
    <>
      <h2>&quot;displayWhenOpen&quot; prop</h2>
      <Accordion label="Here is a label" displayWhenOpen={<p>Add item</p>}>
        Content
      </Accordion>
      <h2>&quot;displayWhenClosed&quot; prop</h2>
      <Accordion open={false} displayWhenClosed={<p>Some items</p>}>
        Content
      </Accordion>
    </>
  ))
  .add('separator', () => (
    <Accordion separator={false}>
      Separator set to false.
    </Accordion>
  ))
  .add('header', () => {
    const header = () => (<p>content</p>);
    return (
      <Accordion header={header}>
        Content
      </Accordion>
    );
  })
  .add('ExpandAll within set', () => (<ExpandAllWithin />));
