import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import List, { Item } from './List';
import SelectableUtils from './ListUtils';

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the child list items should have a border color applied.
   */
  isDivided: PropTypes.bool,
  /**
   * Whether or not unselected items should be disabled.
   * Helpful for enabling max row selection.
   */
  disableUnselectedItems: PropTypes.bool,
  /**
   * Whether or not the child list items has a disclosure indicator presented.
   * The behavior is intended to be used with a single selection style list, as multi selection style list should not perform disclosures.
   */
  hasChevrons: PropTypes.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
  /**
   * Array of keys associated to selected list items
   */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  children: [],
  disableUnselectedItems: false,
  isDivided: false,
  hasChevrons: false,
  onChange: undefined,
  selectedKeys: [],
};

const SelectableList = ({
  children,
  disableUnselectedItems,
  isDivided,
  onChange,
  hasChevrons,
  selectedKeys,
  ...customProps
}) => {
  const clonedChildren = React.Children.map(children, (child) => {
    const newProps = SelectableUtils.newPropsForItem(child, onChange, hasChevrons, selectedKeys, disableUnselectedItems, true);
    return React.cloneElement(child, newProps);
  });

  return (
    <List isDivided={isDivided} role="listbox" {...customProps}>
      {clonedChildren}
    </List>
  );
};

SelectableList.propTypes = propTypes;
SelectableList.defaultProps = defaultProps;
SelectableList.Item = Item;
SelectableList.Utils = SelectableUtils;

export default SelectableList;
