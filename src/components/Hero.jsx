import "./Hero.css"

export const Hero = () => {
    return (
        <div className="hero">
            <h1 className="heading">
                Magic $BUD Token. <br /> Pass it to the right.
            </h1>
            <p>A deflationary cryptocurrency to gather all <span className="underline">Magic Tokers</span> in an exclusive community. 🧐</p>
            <img src="https://media.discordapp.net/attachments/1104739615564374158/1105503828222156830/0.gif?width=1200&height=1200" alt="an image of cannabis" className="hero-img" />
            <a  href="#" target="__blank" className="token-id">View The Official Solana Token ID Here</a>
        </div>
    )
}