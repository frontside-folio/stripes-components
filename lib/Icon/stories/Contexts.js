import React, { Fragment } from 'react';
import Icon from '../Icon';
import Headline from '../../Headline';
import Button from '../../Button';

export default () => {
  return (
    <Fragment>
      <Headline size="x-large">
        <Icon icon="left-arrow" />
        Back
      </Headline>
      <br />
      <Button>
        <Icon icon="plus-sign" />
        Add
      </Button>
      <br />
      <Button buttonStyle="primary">
        Continue
        <Icon icon="right-arrow" />
      </Button>
      <br />
      <a href="http://folio.org">
        This is an external link
        {' '}
        <Icon icon="external-link" />
      </a>
    </Fragment>
  );
};
