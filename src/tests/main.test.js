import appTest from './test';
import signUpTest from './auth/signup.test';
import userVerificationTest from './auth/user-verification.test';
import oauthTest from './auth/oauth.test';
import loginTest from './auth/login.test';
import getUserTest from './users/get-users.test';
import updateUserProfileTest from './users/update-user.test';

appTest();
signUpTest();
userVerificationTest();
loginTest();
oauthTest();
getUserTest();
updateUserProfileTest();
