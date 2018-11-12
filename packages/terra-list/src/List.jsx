import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './List.module.scss';
import Item from './ListItem';
import Section from './ListSection';
import Subsection from './ListSubsection';
import SectionHeader from './ListSectionHeader';
import SubsectionHeader from './ListSubsectionHeader';
import Utils from './ListUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Function callback for the ref of the ul.
   */
  refCallback: PropTypes.func,
  /**
   * Accessibility role of the list, defaults to 'listbox'. If creating a read-only list, pass 'none', and no role will be added.
   */
  role: PropTypes.string,
};

const defaultProps = {
  children: [],
  role: 'listbox',
};

const List = ({
  children,
  refCallback,
  role,
  ...customProps
}) => {
  const listClassNames = cx([
    'list',
    customProps.className,
  ]);

  let roleSpread;
  if (role && role.length > 0 && role !== 'none') {
    roleSpread = { role };
  }

  return (
    <ul {...customProps} {...roleSpread} className={listClassNames} ref={refCallback}>
      {children}
    </ul>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
export {
  Item,
  Section,
  Subsection,
  SectionHeader,
  SubsectionHeader,
  Utils,
};
