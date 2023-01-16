import {store} from '../store';
import {setError} from '../store/action';

const ERROR_TIMEOUT = 3000;

export function handleError(message: string){
  store.dispatch(setError({error: message}));
  setTimeout(
    () => store.dispatch(setError({error: null})),
    ERROR_TIMEOUT
  );
}
