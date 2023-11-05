const Contact = () => {
    return ( 
        <section className="contact-form">
            <div className="container">
                <h1>Drop us a line!</h1>
                <form action="post" >
                    <div className="form-grid">
                        <label>First Name</label>
                        <input type="text" name="firstName" />
                        <label>Email</label>
                        <input type="email" name="email" />
                        <label>Message</label>
                        <textarea name="message"></textarea>
                        <input type="submit" name="submit" value="Submit" />
                    </div>        
                </form>     
            </div>
        </section>
     );
}
 
export default Contact;