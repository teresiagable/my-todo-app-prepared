import axios from "axios";

class todoService {
   async getAll() {
     return await axios
       .get("https://nameless-sea-91978.herokuapp.com/api/todoItem")
       .then((response) => {
         return response.data;
       })
       .catch((error) => {
         console.log(error);
       });
   }
}

export default new todoService();
