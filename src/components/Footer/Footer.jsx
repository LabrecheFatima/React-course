import './Footer.css';

function Footer(props) {
    return (
            <footer className='footer'>
                <div className='footer-content'>
                    <div className='footer-section'>
                        <h3>{props.company}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className='footer-section'>
                        <h4>Quick Links</h4>
                        <ul className='footer-link'>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#support">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className='footer-section'>
                            <h4>Contact Info</h4>
                            <p>{props.email}</p>
                            <p>{props.phone}</p>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>{props.copyright}</p>
                </div>
            </footer>
   
    );
}

export default Footer;