// @flow

import type { ActionType } from "../actionTypes";

export type ViewState = {
  +showDrawer: boolean,
  +notifications: Array<string>,
  +showChangePassword: boolean,
  +showSetPassword: boolean,
  +showRemovePassword: boolean,
  +notifications: Array<string>,
  +showSearchInput: boolean,
  +searchQuery: ?string
};

const defaultViewState = {
  showDrawer: false,
  showChangePassword: false,
  showSetPassword: false,
  showRemovePassword: false,
  notifications: [],
  showSearchInput: false,
  searchQuery: null
};

const view = (
  previousState: ViewState = defaultViewState,
  action: ActionType
) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return Object.assign({}, previousState, {
        showDrawer: !previousState.showDrawer
      });
    case "SET_DRAWER_VISIBILITY":
      return Object.assign({}, previousState, {
        showDrawer: action.value
      });
    case "SHOW_CHANGE_PASSWORD":
      return Object.assign({}, previousState, {
        showChangePassword: true
      });
    case "HIDE_CHANGE_PASSWORD":
      return Object.assign({}, previousState, {
        showChangePassword: false
      });
    case "SHOW_SET_PASSWORD":
      return Object.assign({}, previousState, {
        showSetPassword: true
      });
    case "HIDE_SET_PASSWORD":
      return Object.assign({}, previousState, {
        showSetPassword: false
      });
    case "SHOW_REMOVE_PASSWORD":
      return Object.assign({}, previousState, {
        showRemovePassword: true
      });
    case "HIDE_REMOVE_PASSWORD":
      return Object.assign({}, previousState, {
        showRemovePassword: false
      });
    case "ADD_NOTIFICATION":
      return Object.assign({}, previousState, {
        notifications: [...previousState.notifications, action.notification]
      });
    case "RESOLVE_FIRST_NOTIFICATION":
      return Object.assign({}, previousState, {
        notifications: previousState.notifications.slice(1)
      });
    case "SHOW_SEARCH_INPUT":
      return Object.assign({}, previousState, { showSearchInput: true });
    case "HIDE_SEARCH_INPUT":
      return Object.assign({}, previousState, { showSearchInput: false });
    case "SET_SEARCH_QUERY":
      return Object.assign({}, previousState, { searchQuery: action.query });
    default:
      return previousState;
  }
};

export default view;
