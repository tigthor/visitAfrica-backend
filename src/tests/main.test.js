import loginTest from './auth/login.test';
import appTest from './test';
import signUpTest from './auth/signup.test';
import userVerificationTest from './auth/user-verification.test';
import getUserTest from './users/get-users.test';
import updateUserProfileTest from './users/update-user.test';

appTest();
signUpTest();
userVerificationTest();
loginTest();
getUserTest();
updateUserProfileTest();
