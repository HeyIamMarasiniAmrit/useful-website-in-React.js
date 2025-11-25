import { useState } from 'react';
import './index.css';
import Button from './Button';


    function App() {
      return (
       <div><h1>Useful website</h1>

       <h3>Which website do you want to open ?</h3>
       <Button name="google"link="https://www.google.com/search"/>
       <Button name="ChatGPT"link="https://www.chatgpt.com/"/>
       <Button name="Instagram"link="https://www.instagram.com/"/>
       <br/>
       <Button name="GitHub"link="https://www.github.com/"/>
       <Button name="youtube"link="https://www.youtube.com/"/>
        <Button name="Iporesult"link="https://iporesult.cdsc.com.np/"/>
       
       
       </div>
       
          
        
      );
      
    }

    export default App; 