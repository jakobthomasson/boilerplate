import React, { SFC, Component } from 'react';
import { Toggleable, ToggleableComponentProps } from '../Toggleable/ToggleableUsingComponentInjection';

type MenuItemProps = { title: string };
// const ToggleableWithTitle = Toggleable.ofType<MenuItemProps>();

type ToggleableMenuProps = MenuItemProps;
const ToggleableMenuViaComponentInjection: SFC<ToggleableMenuProps> = ({ title, children }) => (
  <Toggleable<MenuItemProps>
    component={InjectedItem}
    props={{ title }}>
    {children}
  </Toggleable>
);

type InjectedProps = { title: string }; // & ToggleableComponentProps works too
const InjectedItem: SFC<InjectedProps & ToggleableComponentProps> = ({
  title,
  toggle,
  show,
  children,
}) => (
    <>
      <div onClick={toggle}>
        <h1>{title}</h1>
      </div>
      {show ? children : null}
    </>
  );

class ToggleableMenu extends Component {
  render() {
    return (
      <>
        <ToggleableMenuViaComponentInjection title="First Menu">Some Content</ToggleableMenuViaComponentInjection>
        <ToggleableMenuViaComponentInjection title="Second Menu">Some Content</ToggleableMenuViaComponentInjection>
        <ToggleableMenuViaComponentInjection title="Third Menu">Some Content</ToggleableMenuViaComponentInjection>
      </>
    );
  }
}

export default ToggleableMenu;
