class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <div className="menuDesk">
                    <ul>
                        <li><a class="btn btn-outline-dark btn-perso" href="index.php">ACCUEIL</a></li>
                        <li><a class="btn btn-outline-dark btn-perso" href="devis.php">DEVIS</a></li>
                        <li><a class="btn btn-outline-dark btn-perso" href="contact.php">CONTACT</a></li>
                    </ul>
                </div>
                <div className="menuResp">
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav = () => {
                            document.getElementById("mySidenav").style.width = "0";
                        }}>&times;</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>
                    <span style={{fontSize: "30px", cursor: "pointer"}} onClick={openNav = () => {
                        document.getElementById("mySidenav").style.width = "250px";
                    }}>&#9776;</span>
                </div>
            </div>
        )
    }
}

let domContainer5 = document.querySelector('#headerMenu');
ReactDOM.render(<Header />, domContainer5);