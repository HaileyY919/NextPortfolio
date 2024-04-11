'use client'

import { useState } from 'react';
import styles from '../Contactpage.module.css';


function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className={styles.input}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className={styles.input}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message:</label>
                <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className={styles.textarea}
                />
            </div>
            <div className={styles.formGroup}>
                <button type="submit" className={styles.button}>Send Message</button>
            </div>
        </form>
        
    );
}
const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(FormData),
    });
  
    if (response.ok) {
      console.log('Form successfully submitted');
      alert('Thank you for your message!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      console.error('Failed to send message');
      alert('Failed to send message');
    }
  };
  
export default ContactForm;
