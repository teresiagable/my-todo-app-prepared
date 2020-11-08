import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import todoService from '../api/todoService';
import Loader from 'react-loader-spinner';


export default function TodoItemForm() {
  const [todoItem, settodoItem] = useState({
    item: '',
    users: '',
    isLoading: true,
  });
  let param = useParams();
  console.log('tom todo', todoItem);

  useEffect(() => {
    const fetchData = async () => {
      let theItem = await todoService.getTodoItem(param.id);
      let allUsers = await todoService.getUsers();

      console.log('item', theItem);
      console.log('allusers', allUsers);
      settodoItem({
        item: theItem,
        users: allUsers,
        isLoading: false,
      });
    };
    fetchData();
  }, []);

  return todoItem.isLoading ? (
    <div>
      <Loader
        //style={{ textAlign: 'center' }}
        type='Watch'
        color='#d33682'
        height={100}
        width={100}
      />
    </div>
  ) : (
    <div>{console.log(todoItem.users)}</div>
  );
}
