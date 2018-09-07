import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import translations from '../translations/stripes-components/en';

const reducers = {
  form: formReducer,
};

const reducer = combineReducers(reducers);

const store = createStore(reducer);

// mimics the StripesTranslationPlugin in @folio/stripes-core
function prefixKeys(obj) {
  const res = {};
  for (const key of Object.keys(obj)) {
    res[`stripes-components.${key}`] = obj[key];
  }
  return res;
}

class Harness extends React.Component {
  render() {
    const { locale } = this.props;

    return (
      <Provider store={store}>
        <IntlProvider
          locale={locale || 'en'}
          key={locale || 'en'}
          messages={prefixKeys(translations)}
        >
          {this.props.children}
        </IntlProvider>
      </Provider>
    );
  }
}

Harness.propTypes = {
  children: PropTypes.node,
  locale: PropTypes.string
};

export default Harness;
