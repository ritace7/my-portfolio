import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';

describe("Contact Page", () => {
    
    describe("Send me an email form", () =>{
        
        describe("Name input", ()=>{

            test("Name input is present", async() =>{
                render(<Contact />)
                const nameInput = screen.getByPlaceholderText("Enter Your Name");
                expect(nameInput).toBeInTheDocument();
            })
            
            test("Should be able to type into the input", async() =>{
                render(<Contact />)
                const nameInput = screen.getByPlaceholderText("Enter Your Name");
                fireEvent.change(nameInput, {target: { value: "John Doe"}})
                expect(nameInput.value).toBe("John Doe");
            })
        })

        describe("Email input", ()=>{

            test("Email input is present", async() =>{
                render(<Contact />)
                const emailInput = screen.getByPlaceholderText("Enter Your Email");
                expect(emailInput).toBeInTheDocument();
            })
            
            test("Should be able to type into the input", async() =>{
                render(<Contact />)
                const emailInput = screen.getByPlaceholderText("Enter Your Name");
                fireEvent.change(emailInput, {target: { value: "john@testmail.com"}})
                expect(emailInput.value).toBe("john@testmail.com");
            })
        })

        describe("Message input", ()=>{

            test("Message textarea is present", async() =>{
                render(<Contact />)
                const messageInput = screen.getByLabelText("Your Message:");
                expect(messageInput).toBeInTheDocument();
            })
            
            test("Should be able to type into the textarea", async() =>{
                render(<Contact />)
                const messageInput = screen.getByLabelText("Your Message:");
                fireEvent.change(messageInput, {target: { value: "Hello there mate"}})
                expect(messageInput.value).toBe("Hello there mate");
            })
        })
    })
})
