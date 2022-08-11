import reducer, { setUsername, UsernameState } from './usernameSlice';

test('should handle a username being added to an empty field', () => {
    const previousState: UsernameState = {value: ''};

    expect(reducer(previousState, setUsername('User'))).toEqual(
        { value: 'User' }
    );
});