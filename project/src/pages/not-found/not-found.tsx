import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to='/'>Go to main page</Link>
    </>
  );
}

export default NotFound;
