import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SprkIcon from '../../../components/icons/SprkIcon';

const SprkErrorContainer = ({
  additionalClasses,
  analyticsString,
  idString,
  message,
  id }) => (
    <div
      className={classNames('sprk-b-ErrorContainer', additionalClasses)}
      data-analytics={analyticsString}
      data-id={idString}
      id={id}
    >
      <SprkIcon
        additionalClasses="sprk-c-Icon--m sprk-b-ErrorIcon"
        iconName="exclamation-filled-small"
      />
      <div className="sprk-b-ErrorText">{message}</div>
    </div>
);

SprkErrorContainer.propTypes = {
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  id: PropTypes.string.isRequired,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  message: PropTypes.string.isRequired,
};

SprkErrorContainer.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  idString: '',
};

export default SprkErrorContainer;
