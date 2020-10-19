import React from "react";
import data from "../data";
import { useState } from "react";
import styled from "styled-components";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = useState("");
  console.log(suggestions);

  const matchedSuggestions = suggestions.filter((suggestion) => {
    const lowerCaseTitle = suggestion.title.toLowerCase();
    const lowerCaseValue = value.toLowerCase();
    const isIncluded = lowerCaseTitle.includes(lowerCaseValue);
    const moreThanTwoChars = value.length >= 2;
    return isIncluded && moreThanTwoChars;
  });
  console.log("matchedSuggestions", matchedSuggestions);

  return (
    <Maindiv>
      <SearchDiv>
        <Input
          type="text"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              handleSelect(ev.target.value);
            }
          }}
        />
        <Button onClick={() => setValue("")}> Clear</Button>
      </SearchDiv>
      <ListDiv>
        <List>
          {matchedSuggestions.map((match) => {
            return <Item>{match.title} </Item>;
          })}
        </List>
      </ListDiv>
    </Maindiv>
  );
};

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;
const SearchDiv = styled.div`
  display: flex;
`;
const ListDiv = styled.div`
  padding: 10px;
`;
const List = styled.ul``;

const Item = styled.li`
  display: block;
`;
const Button = styled.button`
  background-color: blue;
  color: white;
  border-radius: 10px;
  border: none;
  width: 100px;
  padding: 10px;
  height: 40px;
  margin-left: 10px;
  font-size: 120%;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 250px;
  border-radius: 10px;
  border: solid 2px lightgrey;
  font-size: 120%;
`;

export default Typeahead;
