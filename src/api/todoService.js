import axios from "axios";

class todoService {
  async getAll() {
    return await axios
      .get('https://nameless-sea-91978.herokuapp.com/api/todoItem')
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async getTodoItem(todoId) {
    var config = {
      method: 'get',
      url:
        'https://nameless-sea-91978.herokuapp.com/api/todoItem?type=id&value=' +
        todoId,
      headers: {},
    };
    console.log(config);

    return await axios(config)
      .then((response) => {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async getUsers() {
    var config = {
      method: 'get',
      url: 'https://nameless-sea-91978.herokuapp.com/api/appUser',
      headers: {},
    };
    return await axios(config)
      .then((response) => {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async updateDone(value) {
    console.log('value', value);
    var config = {
      method: 'put',
      url: 'https://nameless-sea-91978.herokuapp.com/api/todoItem/' + value.id,
      data: {
        id: value.id,
        title: value.title,
        description: value.description,
        deadline: value.deadline,
        done: value.done,
        assignee: value.assignee.id,
      },
    };
    console.log('config', config);

    return await axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default new todoService();
