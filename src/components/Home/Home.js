import React, {useState} from 'react';
import Class from '../Class/Class';

function Home(props) {

    const [value, setValue] = useState(''); // 
    const [favoriteClasses, setClasses] = useState([]); // component get re-rendered dsadsa
    
    const handleChange = (event) =>{
        setValue(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(!favoriteClasses.includes(value) && value != ''){
            setClasses(favoriteClasses.concat(value));
            setValue('');
        }
        
        console.log(favoriteClasses);
    }

    return (
        <div>
            <h1>Dean's Favorite CS Classes</h1>
            <form onSubmit={handleSubmit}>
                <label>ADD FAVORITE CLASS </label>
                <input type="text" value = {value} onChange ={handleChange}></input>
                <button type="submit"> ADD</button>
                <h2>-------------------LISTS OF CLASSES-------------------</h2>
            </form>
            
            <div>
                {favoriteClasses.map((favClass) =>
                    <Class name = {favClass} key = {favClass}></Class>
                )}
            </div>
            <h3>----------------------------------------------------------------------------</h3>
        </div>
    )
}

export default Home;


        
