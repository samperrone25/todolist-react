import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';
// <p><Link to="/598">598 Link</Link></p>

export default function HomePage() {
  return (
    <div className="Container">
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
  return (<h1>Your List:</h1>);
}
  
function ListParent({ items }) {
  // map item data into html columns
  let cols = items.map(item =>
    <ListItem title={item.title} description={item.description} done={item.done} />
  );
  return (
    <>
      <table>
        <colgroup>
          {cols}
        </colgroup>
      </table>
    </>
  );
}

function ListItem({ title, description, done }) {
  return (
    <col>
      <text>title</text>
      <text>description</text>
      <text>done</text>
    </col>
  );
}
  
function CurrItembox({ currTitle }) {
  return (<text>Current Item: {currTitle}</text>);
}
  
function ActionList() {
  return (
    <>
      <ul>
        <li>mark as done <button></button></li>
        <li>update description <input type="text" id="name"></input> <button></button></li>
        <li>mark as done <button></button></li>
      </ul>
    </>  
  );
}
  
function NewItemBox () {
  return (<h1>New Item: </h1>);
}
  
function NewItemForm () {
  return (
    <form>
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