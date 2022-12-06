import React from 'react';

const NewsLetter = () => {
    return (
        <section>
            <div className="newsLetterSection">
                <div className="container">
                    <div className="newsLetterArea">
                    <div className="row">
                        <div className="NewsletterTitle">
                         <h3 className="newLetterAlert">
                             Subscribe our newsLetter for getting update
                         </h3>
                        </div>
                        <div className="newsLetterForm">
                            <form>
                                <input type="email" placeholder="Enter your own email" id="inputField" required /> <br />
                                <button className="regularBtn">Subscribe</button>
                            </form>
                        </div>
                     </div>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;