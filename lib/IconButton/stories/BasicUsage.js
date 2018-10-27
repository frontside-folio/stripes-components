import React from 'react';
import { boolean } from '@storybook/addon-knobs/react';
import IconButton from '../IconButton';

const BasicUsage = () => {
  const disabled = boolean('Disabled', false);

  return (
    <div>
      <IconButton
        icon="closeX"
        disabled={disabled}
      />
      <IconButton
        icon="comment"
        disabled={disabled}
        badgeCount="9+"
      />
      <IconButton
        icon="search"
        disabled={disabled}
      />
      <IconButton
        icon="edit"
        disabled={disabled}
      />
      <IconButton
        icon="duplicate"
        disabled={disabled}
      />
    </div>
  );
};

export default BasicUsage;
