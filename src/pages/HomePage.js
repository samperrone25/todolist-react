import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './HomePage.css'
// <p><Link to="/598">598 Link</Link></p>

export default function HomePage() {
  return (
    <div className="HomePage">
      <ViewSection />
      <CreateSection />
    </div>
  );
}
  
function ViewSection() {
  const [currItem, setcurrItem] = useState(0); // begin with first item id (i.e. 1)
  const [items, setItems] = useState([
    {id: 0, title: "bins", description: "take them out", done: false, timestamp: 1213151516},
    {id: 1, title: "car", description: "clean", done: true, timestamp: 1213151517},
    {id: 2, title: "room", description: "tidy", done: false, timestamp: 1213151518},
  ]); // obtain from api
  let currTitle = items[currItem].title; // STORING CURRENT TITLE

  return (
    <div className="ViewSection">
      <PageHeader />
      <ListParent items={items} setItems = {setItems} currItem={currItem} setcurrItem={setcurrItem}/>
      <CurrItemBox currTitle={currTitle}/>
      <ActionList items={items} setItems={setItems} currItem={currItem} setcurrItem={setcurrItem}/>
    </div>
  );
}

function CreateSection () {
  return (
    <div className="CreateSection">
      <NewItemBox />
      <NewItemForm />
    </div>
  );
}

function PageHeader() {
  return (<h1 className="PageHeader">Your List:</h1>);
}
  
function ListParent({ items, currItem, setItems, setcurrItem }) {
  // map item data into html columns
  let mapped_items = items.map(item =>
    (item.title == items[currItem].title ? (
        <ListItem key={Math.random()} item={item} active={true} setcurrItem={setcurrItem} />
    ) : ( // need unique key, can probably change once API is connected as id's will be handled by PGSQL DB
        <ListItem key={Math.random()} item={item} active={false} setcurrItem={setcurrItem} /> 
        // pass active property and changeCurrentItem function
    ))
  );
  return (
    <>
      <div className="ListParent">{mapped_items}</div>
    </>
  );
}

function ListItem({ item, active, setcurrItem }) {

  function handleClick() {
    setcurrItem(item.id);
  }

  let string = item.done === true ? "Completed" : "TO DO";
  return (active === false ?
    <div className="ListItem" onClick={handleClick}>
      {item.title}<br></br>{item.description}<br></br>{string}<br></br>
    </div>
    :
    <div className="ActiveListItem" onClick={handleClick}>
      {item.title}<br></br>{item.description}<br></br>{string}<br></br>
    </div>
  );
}
  
function CurrItemBox({ currTitle }) {
  return (<div className="CurrItemBox">Current Item: {currTitle}</div>);
}
  
function ActionList({ items, setItems, currItem, setcurrItem }) {
  
  function handleDone() {
    // call mark as done in api
    // re retrieve items and display them
    
    // dummy implementation
    // update ITEMS[currItem].done to true
    // re render?
    let newItems = items;
    newItems[currItem].done = true;
    setItems(newItems);
    setcurrItem(currItem);
  }
  
  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    
  }
  // call update description in api
  // re retrieve items and display them

  // dummy implementation
  // update ITEMS[currItem].description to input
  // re render?
  /*let newItems = items;
  newItems[currItem].description = e;
  console.log(e);
  setItems(newItems);
  setcurrItem(currItem);*/

  function handleDelete() {
    // call delete item in api
    // re retrieve items and display them

    // dummy implementation
    // delete ITEMS[currItem]
    // decrement currItem IF it is larger than len(ITEMS)-1 to avoid index err
    // re render?
  }
  return (// below not working properly
    <div className="ActionList">

      <button className="Button" onClick={handleDone}>mark as done</button>
      
      <form>
      <button className="Button" onClick={handleUpdate}>update description</button>
        <input type="text"></input> 
      </form>

    <button className="Button" onClick={handleDelete}>delete item</button>

    </div>  
  );
}
  
function NewItemBox () {
  return (<div className="NewItemBox">New Item: </div>);
}
  
function NewItemForm () {
  return (
    <form className="NewItemForm">
      <ul>
        <li key={1}>title <input type="text" id="title"></input></li>
        <li key={2}>description <input type="text" id="desc"></input></li>
      </ul>
      <button>Create</button>
    </form>
  );
}