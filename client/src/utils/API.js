import axios from 'axios'
export default {
    getBooks: function(req,res) {
      return axios.get('https://www.googleapis.com/books/v1/volumes?',{params:{q:req}})
        
    }
  };