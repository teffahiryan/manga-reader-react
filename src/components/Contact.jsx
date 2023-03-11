import '../styles/Contact.css';

function Contact(){
    return(
        <section className="section-contact">
            <h2 className='title1'> Mes informations </h2>

            <div>
                <p> <i className="fas fa-envelope"></i> teffahi.ryan@gmail.com </p>
                <p> <i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/ryan-teffahi-19aa53205/" target="_blank" rel="noreferrer"> https://www.linkedin.com/in/ryan-teffahi-19aa53205/ </a> </p>
                <p> <i className="fas fa-globe-europe"></i> <a href="https://www.ryan-teffahi.fr" target="_blank" rel="noreferrer"> https://www.ryan-teffahi.fr </a> </p>
            </div>
            
        </section>
    );
}

export default Contact;