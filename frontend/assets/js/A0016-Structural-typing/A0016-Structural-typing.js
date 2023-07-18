"use strict";
const VerifyUser = (user, sentValue) => {
    return (user.password === sentValue.password && user.username === sentValue.username);
};
const bdUser = { username: 'Renan', password: '123456' };
const sentUser = { username: 'Renan', password: '123456' };
const loggedIn = VerifyUser(bdUser, sentUser);
console.log(loggedIn);
//# sourceMappingURL=A0016-Structural-typing.js.map