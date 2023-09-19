import { openDB } from 'idb';

const initdb = async () =>

// TODO: Add a comment explaining what this method does
//creates a database if it doesn't exist 

  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
    //It executes if there are any updates, it runs if the version doesn't match the current database
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      //it creates an object
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
