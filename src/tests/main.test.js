import appTest from './test';
import signUpTest from './auth/signup.test';
import userVerificationTest from './auth/user-verification.test';
import oauthTest from './auth/oauth.test';
import loginTest from './auth/login.test';
import userRoleTest from './users/user-role.test';
import getUserTest from './users/get-users.test';
import updateUserProfileTest from './users/update-user.test';
import manageUserTest from './users/manage-user.test';
import resetPassword from './auth/resetpassword.test';
import multiCityTest from './trip/multi-city.test';
import tripTest from './trip/trip.test';
import updateTripTest from './trip/update-trip.test';

appTest();
signUpTest();
userVerificationTest();
loginTest();
oauthTest();
userRoleTest();
getUserTest();
updateUserProfileTest();
manageUserTest();
resetPassword();
tripTest();
multiCityTest();
updateTripTest();
