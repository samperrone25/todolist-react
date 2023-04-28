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
  const [items, setItems] = useState(ITEMS); // obtain from api
  let currTitle = ITEMS[currItem].title; // STORING CURRENT TITLE

  return (
    <div className="ViewSection">
      <PageHeader />
      <ListParent items={items} currItem={currItem} setcurrItem={setcurrItem}/>
      <CurrItemBox currTitle={currTitle}/>
      <ActionList setItems={setItems} currItem={currItem} setcurrItem={setcurrItem}/>
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
  
function ListParent({ items, currItem, setcurrItem }) {
  // map item data into html columns
  let mapped_items = items.map(item =>
    (item.title == items[currItem].title ? (
        <ListItem key={item.id} item={item} active={true} setcurrItem={setcurrItem} />
    ) : ( // need unique key, can probably change once API is connected as id's will be handled by PGSQL DB
        <ListItem key={item.id} item={item} active={false} setcurrItem={setcurrItem} /> 
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
  
function ActionList({ setItems, currItem, setcurrItem }) {
  
  function handleDone() {
    // call mark as done in api
    // re retrieve items and display them
    
    // dummy implementation
    // update ITEMS[currItem].done to true
    // re render?
    ITEMS[currItem].done = true;
    setcurrItem(currItem);
    setItems(ITEMS);
  }
  function handleUpdate() { 
    // call update description in api
    // re retrieve items and display them

    // dummy implementation
    // update ITEMS[currItem].description to input
    // re render?
  }
  function handleDelete() {
    // call delete item in api
    // re retrieve items and display them

    // dummy implementation
    // delete ITEMS[currItem]
    // decrement currItem IF it is larger than len(ITEMS)-1 to avoid index err
    // re render?
  }
  return (
    <div className="ActionList">
      <ul>
        <li key={1}><button className="Button" onClick={handleDone}>mark as done</button></li>
        <li key={2}><button className="Button" onClick={handleUpdate}>update description</button><input type="text" id="name"></input></li>
        <li key={3}><button className="Button" onClick={handleDelete}>delete item</button></li>
      </ul>
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
  
let ITEMS = [
  {id: 0, title: "bins", description: "take them out", done: false, timestamp: 1213151516},
  {id: 1, title: "car", description: "clean", done: true, timestamp: 1213151517},
  {id: 2, title: "room", description: "tidy", done: false, timestamp: 1213151518},
];