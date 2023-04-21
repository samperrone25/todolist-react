import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function HomePage() {
    return (
    <div className="container">
      <h1>Hey from HomePage</h1>
      <p>This is your awesome HomePage subtitle</p>
      <p>
        <Link to="/598">598 Link</Link>
      </p>
    </div>
    );

    return (
      <><div>
          <pageHeader />
        </div>
        <div>
          <table>
          <listParent /> 
          </table>
        </div>
        <div>
          <currItemBox currItem="Jimmy"/>
        </div>
        <div>
          <actionList />
        </div>
        <div>
          <newItemBox />
        </div>
        <div>
          <newItemForm />
        </div>
      </>
      
    );
  }
  
  function viewSection() {

  }
  function createSection () {
    
  }
  function pageHeader() {
      return (<h1>Your List:</h1>);
  }
  
  function listParent() {
      // get items
      let cols = ITEMS.map(item =>
          <col>
            <text>item.title</text>
            <text>item.description</text>
            <text>item.done</text>
          </col>
      );
  
      return (<colgroup>{cols}</colgroup>);
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