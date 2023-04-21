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
  return (
    <div className="ViewSection">
      <PageHeader />
      <ListParent items={ITEMS} />
      <CurrItemBox currItem="Jimmy" />
      <ActionList />
    </div>
  );
}

function CreateSection () {
  return (
    <div classname="CreateSection">
      <NewItemBox />
      <NewItemForm />
    </div>
  );
}

function PageHeader() {
  return (<h1 className="PageHeader">Your List:</h1>);
}
  
function ListParent({ items }) {
  // map item data into html columns
  let mapped_items = items.map(item =>
    <ListItem title={item.title} description={item.description} done={item.done}/>
  );
  return (
    <>
      <div className="ListParent">{mapped_items}</div>
    </>
  );
}

function ListItem({ title, description, done }) {
  let string = done === true ? "Completed" : "TO DO";
  return (
    <div className="ListItem">
      <text>{title}<br></br>{description}<br></br>{string}<br></br></text>
    </div>
  );
}
  
function CurrItemBox({ currTitle }) {
  return (<div className="CurrItemBox">Current Item: {currTitle}</div>);
}
  
function ActionList() {
  return (
    <div className="ActionList">
      <ul>
        <li><button className="Button">mark as done</button></li>
        <li><button className="Button">update description</button><input type="text" id="name"></input></li>
        <li><button className="Button">mark as done</button></li>
      </ul>
    </div>  
  );
}
  
function NewItemBox () {
  return (<h1 className="NewItemBox">New Item: </h1>);
}
  
function NewItemForm () {
  return (
    <form className="NewItemForm">
      <ul>
        <li>title <input type="text" id="title"></input></li>
        <li>description <input type="text" id="desc"></input></li>
      </ul>
      <button>Create</button>
    </form>
  );
}
  
const ITEMS = [
  {id: 1, title: "bins", description: "take them out", done: false, timestamp: 1213151516},
  {id: 2, title: "car", description: "clean", done: true, timestamp: 1213151517},
  {id: 3, title: "room", description: "tidy", done: false, timestamp: 1213151518},
];