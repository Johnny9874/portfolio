import { useState } from 'react';
import './../styles/Contact.css';
import SectionWrapper from '../components/SectionWrapper';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        const response = await fetch('https://formspree.io/f/xanebgbg', {
            method: 'POST',
            body: data,
            headers: {
                Accept: 'application/json',
            },
        });

        if (response.ok) {
            setStatus('Message sent successfully! ✅');
            form.reset();
        } else {
            setStatus('Something went wrong. ❌ Please try again.');
        }
    };

    return (
        <SectionWrapper id="contact">
            <h1>Contact Me Right Now :</h1>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" rows="5" required />
                <input type="hidden" name="_captcha" value="false" />
                <button type="submit">Send</button>
            </form>

            {/* Affiche le message après soumission */}
            {status && <p className="form-status">{status}</p>}
        </SectionWrapper>
    );
};

export default Contact;
