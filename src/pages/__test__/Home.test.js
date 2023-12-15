import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Home from '../Home';

//Home page
describe("Home", () => {

    render(<Home />);
    
    test("should render name", async() =>{
        const nameElement = screen.getByTitle("name");
        expect(nameElement).toBeInTheDocument();
    })
})