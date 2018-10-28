/**
 * Available icons
 * Usage: Add new key to object that returns a component
 */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faBookmark,
  faCalendar,
  faCircle,
  faCommentAlt,
  faClock,
  faClone,
  faTimesCircle,
  faTrashAlt
} from '@fortawesome/free-regular-svg-icons';

import {
  faArchive,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faCaretDown,
  faCaretUp,
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faCog,
  faEllipsisH,
  faExclamationCircle,
  faExternalLinkAlt,
  faEye,
  faEyeSlash,
  faInfoCircle,
  faPen,
  faPlus,
  faPrint,
  faSearch,
  faTag,
  faTimes,
  faTimesCircle as faTimesCircleSolid,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

import dotSpinner from './DotSpinner.css';

export default {
  'external-link': () => (
    <FontAwesomeIcon icon={faExternalLinkAlt} />
  ),
  'info': () => (
    <FontAwesomeIcon icon={faInfoCircle} />
  ),
  'plus-sign': () => (
    <FontAwesomeIcon icon={faPlus} />
  ),
  'gear': () => (
    <FontAwesomeIcon icon={faCog} />
  ),
  'validation-check': () => (
    <FontAwesomeIcon icon={faCheckCircle} />
  ),
  'validation-error': () => (
    <FontAwesomeIcon icon={faExclamationCircle} />
  ),
  'default': () => (
    <FontAwesomeIcon icon={faCircle} />
  ),
  'clearX': () => (
    <FontAwesomeIcon icon={faTimesCircleSolid} />
  ),
  'closeX': () => (
    <FontAwesomeIcon icon={faTimes} />
  ),
  'calendar': () => (
    <FontAwesomeIcon icon={faCalendar} />
  ),
  'tag': () => (
    <FontAwesomeIcon icon={faTag} />
  ),
  'trashBin': () => (
    <FontAwesomeIcon icon={faTrashAlt} />
  ),
  'comment': () => (
    <FontAwesomeIcon icon={faCommentAlt} />
  ),
  'bookmark': () => (
    <FontAwesomeIcon icon={faBookmark} />
  ),
  'search': () => (
    <FontAwesomeIcon icon={faSearch} />
  ),
  'duplicate': () => (
    <FontAwesomeIcon icon={faClone} />
  ),
  'edit': () => (
    <FontAwesomeIcon icon={faPen} />
  ),
  'profile': () => (
    <FontAwesomeIcon icon={faUserCircle} />
  ),
  'hollowX': () => (
    <FontAwesomeIcon icon={faTimesCircle} />
  ),
  'archive': () => (
    <FontAwesomeIcon icon={faArchive} />
  ),
  'right-arrow': () => (
    <FontAwesomeIcon icon={faArrowRight} />
  ),
  'left-arrow': () => (
    <FontAwesomeIcon icon={faArrowLeft} />
  ),
  'down-arrow': () => (
    <FontAwesomeIcon icon={faArrowDown} />
  ),
  'up-arrow': () => (
    <FontAwesomeIcon icon={faArrowUp} />
  ),
  'up-caret': () => (
    <FontAwesomeIcon icon={faChevronUp} />
  ),
  'down-caret': () => (
    <FontAwesomeIcon icon={faChevronDown} />
  ),
  'down-triangle': () => (
    <FontAwesomeIcon icon={faCaretDown} />
  ),
  'up-triangle': () => (
    <FontAwesomeIcon icon={faCaretUp} />
  ),
  'right-double-chevron': () => (
    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12.674 11.293L7.83 6.449a.999.999 0 1 0-1.414 1.414L10.553 12l-4.137 4.137a.999.999 0 1 0 1.414 1.414l4.844-4.844a1 1 0 0 0 0-1.414z" />
      <path d="M13.49 6.449a.999.999 0 1 0-1.414 1.414L16.213 12l-4.137 4.137a.999.999 0 1 0 1.414 1.414l4.844-4.844a.999.999 0 0 0 0-1.414L13.49 6.449z" />
    </svg>
  ),
  'left-double-chevron': () => (
    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M17.584 6.449a.999.999 0 0 0-1.414 0l-4.844 4.844a.997.997 0 0 0 0 1.414l4.844 4.844a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.447 12l4.137-4.137a.999.999 0 0 0 0-1.414z" />
      <path d="M7.787 12l4.137-4.137a.999.999 0 1 0-1.414-1.414l-4.844 4.844a.996.996 0 0 0 0 1.414l4.844 4.844a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L7.787 12z" />
    </svg>
  ),
  'eye-open': () => (
    <FontAwesomeIcon icon={faEye} />
  ),
  'eye-closed': () => (
    <FontAwesomeIcon icon={faEyeSlash} />
  ),
  'end-mark': () => (
    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M19.4 12.3c-.1-.1-.3-.2-.4-.2-.1 0-.3 0-.4.1l-.3.3c0 .1.1.2.1.3v.3c0 .4-.1.6-.3.8-.2.2-.5.3-.8.3-.6 0-1.1-.8-1.4-2.3-.1-.4-.1-.8-.2-1-.2-.9-.5-1.5-1-1.9-.5-.4-1.1-.7-1.9-.7-.6 0-1.1.2-1.5.5-.4.3-.6.8-.6 1.3 0 .2 0 .4.1.7.1.2.2.5.3.8-.4-.4-.7-.6-1.1-.8-.4-.2-.8-.3-1.3-.3-.2-.5-.6-.9-1.3-1.3-.1 0-.1-.1-.2-.1-.2-.1-.4-.3-.5-.5s-.1-.3-.1-.5c0-.1 0-.2.1-.3 0-.1.1-.2.2-.3-.5 0-.9.1-1.2.3-.3.2-.5.5-.5.9 0 .3.1.5.3.7.2.1.5.2.9.4.1 0 .2 0 .3.1.7.2 1.2.4 1.4.8-.9.2-1.6.5-2.1 1s-.9 1.2-1.1 2.1c-.1.1-.2.2-.3.4-.1.1-.1.3-.2.4l.4.2c.1.6.3 1 .6 1.3s.7.4 1.1.4c.4 0 .7-.1.9-.3.2-.2.4-.5.4-.9V15c0-.1 0-.2-.1-.3-.1.1-.3.3-.4.3-.1-.1-.3 0-.4 0-.2 0-.4-.1-.6-.2-.1-.2-.3-.4-.3-.7.9-.4 1.6-.8 2-1.3.4-.5.7-1.1.7-1.7.4 0 .8.1 1.1.3s.6.4.9.8c-.5.2-.8.4-1 .6-.2.3-.3.6-.3 1 0 .8.4 1.4 1.1 1.9.7.5 1.6.8 2.7.8.8 0 1.7-.2 2.6-.5.9-.4 1.9-1 3-1.8.3-.2.5-.5.7-.7.2-.2.2-.5.2-.7-.1-.2-.2-.3-.3-.5zm-11.8.1c-.4.4-1 .7-1.7.9.1-.7.4-1.2.7-1.6.4-.3.9-.5 1.6-.7 0 .6-.2 1.1-.6 1.4z" />
    </svg>
  ),
  'diacritic': () => (
    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 20h24v4H0z" />
      <path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z" />
    </svg>
  ),
  'indexes': () => (
    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
    </svg>
  ),
  'print': () => (
    <FontAwesomeIcon icon={faPrint} />
  ),
  'ellipsis': () => (
    <FontAwesomeIcon icon={faEllipsisH} />
  ),
  'spinner-ellipsis': () => (
    <div className={dotSpinner.spinner}>
      <div className={dotSpinner.bounce1} />
      <div className={dotSpinner.bounce2} />
      <div className={dotSpinner.bounce3} />
    </div>
  ),
  'clock': () => (
    <FontAwesomeIcon icon={faClock} />
  )
};
