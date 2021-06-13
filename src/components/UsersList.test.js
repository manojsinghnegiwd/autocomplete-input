import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import UsersList from './UsersList';

test('renders user input', () => {
    const tree = renderer
        .create(
            <UsersList
                users={[]}
                onSelect={() => {}}
                isListVisible={true}
                currentIndex={0}
            />
        ).toJSON();
    
    expect(tree).toMatchSnapshot();
})

test('renders user input when users list is provided', () => {
    const tree = renderer
        .create(
            <UsersList
                users={[
                    'Manoj Singh Negi',
                    'Ross Geller'
                ]}
                onSelect={() => {}}
                isListVisible={true}
                currentIndex={0}
            />
        ).toJSON();
    
    expect(tree).toMatchSnapshot();
})


test('renders user input when isListVisible is false', () => {
    const tree = renderer
        .create(
            <UsersList
                users={[
                    'Manoj Singh Negi',
                    'Ross Geller'
                ]}
                onSelect={() => {}}
                isListVisible={false}
                currentIndex={0}
            />
        ).toJSON();
    
    expect(tree).toMatchSnapshot();
})

test('call onSelect when clicked on any item', () => {
    const onSelect = jest.fn()

    render(
        <UsersList
            users={[
                'Manoj Singh Negi',
                'Ross Geller'
            ]}
            onSelect={onSelect}
            isListVisible={true}
            currentIndex={0}
        />
    )

    userEvent.click(screen.getByText('Manoj Singh Negi'))
    expect(onSelect).toHaveBeenCalledWith('Manoj Singh Negi')
})
