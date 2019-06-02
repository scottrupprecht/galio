import React from 'react';
import Icons from 'react-native-vector-icons';
import PropTypes from 'prop-types';

import GalioTheme, { withGalio } from './theme';

class Icon extends React.Component {
  render() {
    const { name, family, size, color, styles, theme, ...rest } = this.props;
    const { [family]: IconInstance } = Icons;

    if (name && IconInstance) {
      return (
        <IconInstance
          name={name}
          size={size || theme.SIZES.BASE}
          color={color || theme.COLORS.BLACK}
          {...rest}
        />
      );
    }

    return null;
  }
}

Icon.defaultProps = {
  name: null,
  family: null,
  size: null,
  color: null,
  styles: {},
  theme: GalioTheme,
};

Icon.propTypes = {
  name: PropTypes.string,
  family: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  styles: PropTypes.any,
  theme: PropTypes.any,
};

export default withGalio(Icon);
