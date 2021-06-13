import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import UserInput from './UserInput';

test('renders user input', () => {
    const tree = renderer
        .create(
            <UserInput
                value="Ross"
                onKeyDown={() => {}}
                setUser={() => {}}
            />
        ).toJSON();
    
    expect(tree).toMatchSnapshot();
})

test('call setUser when user type in the input', () => {
    const setUser = jest.fn();

    render(
        <UserInput
            value=""
            onKeyDown={() => {}}
            setUser={setUser}
        />
    )

    userEvent.type(screen.getByPlaceholderText('Search users'), 'M')
    expect(setUser).toHaveBeenCalledWith('M');
})

test('call onKeyDown when user press navigation key', () => {
    const onKeyDown = jest.fn();

    render(
        <UserInput
            value=""
            onKeyDown={onKeyDown}
            setUser={() => {}}
        />
    )

    fireEvent.keyDown(screen.getByPlaceholderText('Search users'), {
        keyCode: 38
    })
    expect(onKeyDown).toHaveBeenCalled();
})

test('call onKeyDown when user press enter', () => {
    const onKeyDown = jest.fn();

    render(
        <UserInput
            value=""
            onKeyDown={onKeyDown}
            setUser={() => {}}
        />
    )

    fireEvent.keyDown(screen.getByPlaceholderText('Search users'), {
        keyCode: 13
    })
    expect(onKeyDown).toHaveBeenCalled();
})
