import reducer, {login, logout} from './userSlice';

test('должен вернуть начальное состояние', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({ userName: '', isLoggedIn: false })
})

test('должен залогинить пользователя User', () => {
  const previousState = { userName: '', isLoggedIn: false };
  expect(reducer(previousState, login('User'))).toEqual({userName: 'User', isLoggedIn: true})
})

test('должен разлогинить пользователя', () => {
  const previousState = {userName: 'User', isLoggedIn: true};
  expect(reducer(previousState, logout())).toEqual({ userName: '', isLoggedIn: false })
})
