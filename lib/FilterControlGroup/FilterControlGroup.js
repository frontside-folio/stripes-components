import React from 'react';
import PropTypes from 'prop-types';
import css from './FilterControlGroup.css';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  style: PropTypes.object,
};

class FilterControlGroup extends React.Component {
  constructor(props) {
    super(props);

    console.warn(
      '\nWarning: <FilterControlGroup> is deprecated and will be removed in the\n' +
           'next major version of @folio/stripes-components.\n\n'
    );
  }

  render() {
    const { children, label, style } = this.props;

    return (
      <ul
        style={style}
        className={css.filterList}
        aria-label={label}
      >
        {React.Children.map(children, child => (
          <li key={child.id} className={css.listItem}>{child}</li>
        ))}
      </ul>
    );
  }
}

FilterControlGroup.propTypes = propTypes;

export default FilterControlGroup;
