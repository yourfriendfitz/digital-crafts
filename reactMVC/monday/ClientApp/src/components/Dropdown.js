import React, { useState, useEffect } from "react";
import { DropdownItem, DropdownMenu } from "reactstrap";
const DropdownItems = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://boiling-escarpment-07603.herokuapp.com/books")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <DropdownMenu className="text-center">
      {data.map((book, i) => (
        <DropdownItem
          key={i}
          onClick={this.handleSelect}
          data-id={book.id}
          data-title={book.title}
        >
          {book.title}
        </DropdownItem>
      ))}
    </DropdownMenu>
  );
};
export default DropdownItems;
