import { Button } from "./Button"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <div className="logo">
                    <div className="logo-img">
                        <img src="https://pbs.twimg.com/profile_images/1655617404855283712/zKz0o6XI_400x400.jpg" />
                    </div>
                    <p>Magic Bud</p>
                </div>
            </div>
            <div className="center">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Tokin'omics</li>
                </ul>
            </div>
            <div className="right">
                <Button onClick={() => window.open("https://presale.magicbud.gg/", "__blank")} style={{ background: "#1F224D" }} text="Get $BUD" />
            </div>
        </div>
    )
}