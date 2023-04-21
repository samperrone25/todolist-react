import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';
// <p><Link to="/598">598 Link</Link></p>

export default function HomePage() {
  return (
    <div className="container">
      <viewSection />
      <createSection />
    </div>
  );
}
  
function viewSection() {
  return (
    <div className="viewSection">
      <pageHeader />
      <listParent items={ITEMS} />
      <currItemBox currItem="Jimmy" />
      <actionList />
    </div>
  );
}

function createSection () {
  return (
    <div classname="createSection">
      <newItemBox />
      <newItemForm />
    </div>
  );
}

function pageHeader() {
  return (<h1>Your List:</h1>);
}
  
function listParent({ items }) {
  // map item data into html columns
  let cols = items.map(item =>
    <listItem title={item.title} description={item.description} done={item.done} />
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

function listItem({ title, description, done }) {
  return (
    <col>
      <text>title</text>
      <text>description</text>
      <text>done</text>
    </col>
  );
}
  
function currItembox({ currTitle }) {
  return (<text>Current Item: {currTitle}</text>);
}
  
function actionList() {
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
  
function newItemBox () {
  return (<h1>New Item: </h1>);
}
  
function newItemForm () {
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