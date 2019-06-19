export default function isBackoffice () {
  return window && document.querySelector('.ant-layout') ? true : false;
}