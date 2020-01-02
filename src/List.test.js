import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';
import List from './List';
//smoke test
it('renders without crashing', () => {
    
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

//snapshot
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header="title" cards={Card}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });