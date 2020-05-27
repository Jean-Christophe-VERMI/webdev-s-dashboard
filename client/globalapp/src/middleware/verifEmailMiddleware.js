import axios from 'axios';

import {
  SEND_TOKEN,
  errorMsg,
  validationEmail,
  hasErrorVerifEmail,
} from '../actions/user';

const verifEmailMiddleware = store => next => action => {
  switch (action.type) {
    case SEND_TOKEN: {
      axios({
        method: 'post',
        url: 'http://localhost:4000/verification-email',
        data: {
          secretToken: store.getState().verifEmail.secretToken,
        },
      })
        .then(response => {
          console.log(response);
          store.dispatch(validationEmail());
        })
        .catch(error => {
          if (error.response) {

            console.log(error.response.data.error);
            const errorMessage = error.response.data.error;
            
            store.dispatch(hasErrorVerifEmail());
            store.dispatch(errorMsg(errorMessage));

           
          }
        });
      next(action);
      break;
    }
    default:
      console.log('Je laisse passer cette action: ', action);
      next(action);
      break;
  }
};

export default verifEmailMiddleware;