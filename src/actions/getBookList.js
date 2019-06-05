import axios from 'axios';

export const GET_BOOK_LIST = 'GET_BOOK_LIST';

function get(){
    return {
        type: 'GET',
    }
}

function bookList(bookListArray){
    return {
        type: 'GET_BOOK_LIST',
        payload: { bookListArray }
    }
}

export default function getBookList() {
    return (dispatch) => {
        axios.get('https://reading-club-backend.herokuapp.com/book/1')
            .then(res => {
                var str = JSON.parse(res.data.message);
                console.log('------>', str);
                dispatch(bookList(str));
                // this.setState(
                //     {bookListArray: str},
                //     () => {
                //         console.log("done!!!!!!", this.state);
                //     }
                // );
                dispatch(get());
            }).catch(error => {})
    }
}