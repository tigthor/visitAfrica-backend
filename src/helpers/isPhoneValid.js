const isPhoneValid = (tel) => {
  const passVal = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return passVal.test(String(tel));
};

export default isPhoneValid;
