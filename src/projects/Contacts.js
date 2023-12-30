import Navbar from '../components/navbar'

const Contact = () => {
    return(
        <body style={{ background: 'linear-gradient(to right, #ff0000, #0000ff)' , width : '100vw' , height : "100vh"}}>
        <Navbar Text={"Extras"}/>
        <div style={{border : "2px solid wheat" , borderRadius : "15px" , paddingLeft : "2%"}}>
        <p style={{color : "white" , margin : "2%"}}>
            Github repository : <a  style = {{color : "white"}} href='https://github.com/AyushisPro2011/React-Projects'>https://github.com/AyushisPro2011/React-Projects</a><br/>
            Website Production Build :  <a  style = {{color : "white"}} href='https://ayushispro2011.github.io/React-Projects/'>https://ayushispro2011.github.io/React-Projects/</a>
        </p>
        <br/>
        <h1>Technologies used</h1>
        <ul>
        <li>Vs Code :<a  style = {{color : "white"}} href='https://code.visualstudio.com/'>Official code site</a><br/></li>
        <li> Node.js : <a  style = {{color : "white"}} href='https://nodejs.org/en'>Official NPM site</a><br/></li>
        <li>Javascript<br/></li>
        <li>Html<br/></li>
        <li>CSS<br/></li>
        <li>React.js :<a  style = {{color : "white"}} href='https://react.dev/'>https://react.dev/</a><br/></li>
        <li>Git (Version Control System) :<a  style = {{color : "white"}} href='https://git-scm.com/'>https://git-scm.com/</a><br/></li>
        </ul>
        <p>Special Thanks to me (yes , nobody helped me in this project)</p>
        </div>
        </body>
    )
}
export default Contact;