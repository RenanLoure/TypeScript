type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const VerifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.password === sentValue.password && user.username === sentValue.username
  );
};

const bdUser = { username: 'Renan', password: '123456' };
const sentUser = { username: 'Renan', password: '123456' };
const loggedIn = VerifyUser(bdUser, sentUser);

console.log(loggedIn);
