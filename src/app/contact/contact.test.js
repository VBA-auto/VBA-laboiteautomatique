import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './page';

describe('Contact Form', () => {
  it('should show the confirmation modal when the form is submitted', () => {
    render(<Contact />);
    
    const submitButton = screen.getByText('Envoyer');
    fireEvent.click(submitButton);
    
    const modal = screen.getByText('Je ne suis pas un robot');
    expect(modal).toBeInTheDocument();
  });
  
  it('should not submit the form if the user cancels the confirmation', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    
    render(<Contact />);
    
    const submitButton = screen.getByText('Envoyer');
    fireEvent.click(submitButton);
    
    const cancelButton = screen.getByText('Annuler');
    fireEvent.click(cancelButton);
    
    expect(mockFetch).not.toHaveBeenCalled();
  });
  
  it('should not submit the form if the user has not verified', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    
    render(<Contact />);
    
    const submitButton = screen.getByText('Envoyer');
    fireEvent.click(submitButton);
    
    const verifyButton = screen.getByText('Vérifier');
    fireEvent.click(verifyButton);
    
    expect(mockFetch).not.toHaveBeenCalled();
  });
  
  it('should submit the form if the user confirms the submission', () => {
    const mockFetch = jest.fn(() => Promise.resolve({ ok: true }));
    global.fetch = mockFetch;
    
    render(<Contact />);
    
    const submitButton = screen.getByText('Envoyer');
    fireEvent.click(submitButton);
    
    const checkbox = screen.getByText('Je ne suis pas un robot');
    fireEvent.click(checkbox);
    
    const verifyButton = screen.getByText('Vérifier');
    fireEvent.click(verifyButton);
    
    expect(mockFetch).toHaveBeenCalledWith('/api/contactForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: '',
        phone: '',
        name: '',
        message: '',
        category: 'Renault Captur',
      }),
    });
  });
});
