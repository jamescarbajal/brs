import { FooterContainer } from './StyledComponents'

export default function AppFooter() {

    return (
        <FooterContainer className="site-footer">
                    <div class="container-fluid" style={{ height: 'fit-content' }}>
                        <div class="row">
                            <div class="col-sm-12 col-md-9 p-4">
                                <h6 class="px-4" style={{ height:"fit-content", fontSize: 20, fontWeight: '550' }}>ABOUT</h6>
                                <p class="px-4">Brother Ryan Shop is... </p>
                            </div>

                            <div class="col-sm-12 col-md-3 text-justify px-4" style={{ height: "fit-content" }}>
                                <h6 class=" px-4">QUICK LINKS</h6>
                                <ul class="footer-links px-4">
                                    <li><a href="./Order.html" target="_blank">ORDER</a></li>
                                    <li><a href="./FAQ.html" target="_blank">FAQ</a></li>
                                    <li><a href="./Contact.html" target="_blank">CONTACT</a></li>
                                </ul>
                            </div>
                        </div>

                        <hr class="mx-auto" style={{ maxWidth: '90%' }}></hr>

                        <div class="row p-3">
                            <div class="col-12">
                                <div class="d-flex flex-column justify-content-center align-items-center">
                                    <p class="copyright-text text-center">
                                        Copyright &copy; 2022 All Rights Reserved by <i>Brother Ryan Shop, LLC</i>
                                    </p>
                                    <p class="copyright-text text-center">
                                        Website designed by <a className="gitLink" href="https://github.com/jamescarbajal" target="blank_">James Carbajal</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
        </FooterContainer>
    );
};