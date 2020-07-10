function changeAddressBarColor(color) {
  document
    .querySelector('meta[name=theme-color]')
    .setAttribute('content', color);
}

export default changeAddressBarColor;
