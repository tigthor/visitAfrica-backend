const isPasswordValid = (password) => {
	const passVal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
	return passVal.test(String(password));
};

export default isPasswordValid;
