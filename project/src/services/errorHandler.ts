import {store} from '../store';
import {setError} from '../store/action';

export function handleError(message: string){
  store.dispatch(setError({error: message}));
  setTimeout(
    () => store.dispatch(setError({error: null})),
    3000
  );
}
