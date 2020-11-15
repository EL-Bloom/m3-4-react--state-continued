import React from "react";  
import data from "../data"; 
import styled from "styled-components"
import TypeAhead from "./Typeahead";  

const Suggestion = (props) => {   
    const {suggestion, onClick, searchTerm, categories} = props; 
    console.log(suggestion);
    const lowerCasedSuggestion = suggestion.toLowerCase(); 
    const matchIndex= lowerCasedSuggestion.indexOf(searchTerm); 
    const matchEnd= matchIndex + searchTerm.length;  

    const firstHalf = suggestion.slice(0, matchEnd); 
    const secondHalf = suggestion.slice(matchEnd);
    console.log({matchIndex,matchEnd});
return (   

    <Wrapper onClick={onClick}>
        <span>  
            {firstHalf}
            <Predictions>{secondHalf}</Predictions>
        </span>{` `} 
        in <Category>{categories.name}</Category>
    </Wrapper>
)
}

const Wrapper = styled.li`  
padding:5px; 
&:hover { 
  background-color: #fffbe6;
} 
`;
const Predictions = styled.span` 
 font-weight:bold;
 `; 
 const Category = styled.span`  
color:#B628BD; 
 `;
export default Suggestion; 


   // const lowerCasedSuggestation = suggestions.title.toLowerCase(); 
    // const matchIndex= lowerCasedSuggestation.indexOf(searchTerm); 
    // const matchEnd= matchIndex + searchTerm.length;  

    // const firstHalf = suggestions.title.slice(0, matchEnd); 
    // const secondHalf = suggestions.title.slice(matchEnd);
    // console.log({matchIndex,matchEnd})
    

    // return ( 
    //     <Wrapper onClick={onClick}> 
    //     <span>  
    //         Dea 
    //         <Prediction>r girls</Prediction>
    //     </span>
        
    //     </Wrapper>
    // )