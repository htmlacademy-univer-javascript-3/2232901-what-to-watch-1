import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions';

function UserBlock(){
  const dispatch = useAppDispatch();
  const avatarUrl = useAppSelector((state) => state.avatarUrl);
  const isAuthorised = useAppSelector((state) => state.isAuthorised);

  if (!isAuthorised) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link
            className="user-block__link"
            to={'/login'}
          >
            Login
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={'/mylist'}>
            <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          to={'/'}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logout());
          }}
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}

export default UserBlock;
