import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <body>
      <h1>404 Not Found</h1>
      <Link to='/'>Go to main page</Link>
    </body>
  );
}

export default NotFound;
