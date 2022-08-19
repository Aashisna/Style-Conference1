import React from 'react';
export default function Register() {
    return (
        <>
          <div>
            <nav className='nav1'>
                <section>
                    <h2 className='h2 fs-2'>Register</h2>
                    <p className='p'>Every year we aim to have an unbelievable time, and this year we'd love it for you to join us.<br />
                        Conference passes only cost $99, one of the best values you'll find.</p>
                </section>
            </nav>

            <div className='container'>
            <div className="row row1 d-flex justify-content-between">
                <div className="col-lg-4 column1">
                    <h3 className='h3'>
                        Purchase a Conference Pass
                    </h3>
                    <h6 className='h6'>
                        $99 PER PASS
                    </h6>
                    <p className='p'>
                        Purchase your Styles Conference pass using the form to the right.
                        Multiple passes may be purchased within the same order, so feel free to bring a friend or two along.
                        Once your order is finished we’ll follow up and provide a receipt for your purchase. See you soon!
                    </p>
                    <h4 className='h4'>
                        Why Attend?
                    </h4>
                    <ul type="square">
                        <li className='li'>
                            Over twenty world-class speakers
                        </li>
                        <li className='li'>
                            One full day of workshops and two full days of presentations
                        </li>
                        <li className='li'>
                            Hosted at The Chicago Theatre, a historical landmark
                        </li>
                        <li className='li'>
                            August in Chicago is simply amazing
                        </li>
                    </ul>
                </div>
                <div className="col-lg-8 column1">
                    <form action="register.php" method="post">
                        <label for="username">Name</label><br />
                        <input type="text" placeholder="Full name" id="username" name="username" required /><br /><br />
                        <label for="email">Email</label><br />
                        <input type="text" placeholder="Email address" id="email" name="email" required /><br /><br />
                        <label>Number of Passes</label><br />
                        <select>
                            <option> 1 </option>
                            <option> 2 </option>
                            <option> 3 </option>
                            <option> 4 </option>
                            <option> 5 </option>
                        </select><br /><br />
                        <label>Comments</label><br />
                        <textarea rows="5" cols="30">
                        </textarea><br /><br />
                        <input type="submit" value="Purchase" />
                    </form>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}