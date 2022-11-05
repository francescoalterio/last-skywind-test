
    import Skywind from "skywind";
import Button from '../components/Button.js'
    export default async function usingAsyncFunction(props) {
      




return `<style type="text/css"> ${await Skywind.importStylesheet('./styles/index.css')}</style>
    <html>
        <head></head>
        <body>
        <h1>This is the index</h1>
        ${await Button({ content:"This is a button with props",})}
        </body>
    </html>
    
`


    }