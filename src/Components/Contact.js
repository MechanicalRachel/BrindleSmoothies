const Contact = () => {
    return ( 
        <section className="contact-form">
            <div className="container">
                <h1>Drop us a line!</h1>
                <form>
                    <div className="form-grid">
                        <label>Name</label>
                        <input type="text" name="userName" className="form-control" />
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" />
                        <label>Message</label>
                        <textarea name="message" className="form-control"></textarea>
                        <input type="submit" name="submit" value="Submit" className="btn btn-info" />
                    </div>        
                </form>     
            </div>
        </section>
     );
}
 
export default Contact;