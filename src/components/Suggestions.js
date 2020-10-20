import React from "react";  
import data from "../data";
import TypeAhead from "./Typeahead";  

const Suggestions = (props) => {   
    const {suggestions,onClick, searchTerm}
    console.log(suggestions); 
    const lowerCasedSuggestation = suggestion.title.toLowerCase(); 
    const matchIndex= lowerCasedSuggestation.indexOf(searchTerm); 
    const matchEnd= matchIndex + searchTerm.length;  

    const firstHalf = suggestions.title.slice(0, matchEnd); 
    const secondHalf = suggestion.title.slice(matchEnd);
    console.log({matchIndex,matchEnd})
    

    return ( 
        <Wrapper onClick={onClick}> 
        <span>  
            Dea 
            <Prediction>r girls</Prediction>
        </span>
        
        </Wrapper>
    )
}

const Wrapper = styled.li` 
`; 
const Prediction = styled.span` 
 font-weight:bold;
 `;
export default Suggestions;