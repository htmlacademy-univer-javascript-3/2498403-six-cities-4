import {Link} from 'react-router-dom';
import {AppRoute} from '../const';

function NotFound(): JSX.Element {
  return (
    <div style={{paddingLeft: 20}}>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Root}>Перейти на главную страницу</Link>
    </div>
  );
}

export default NotFound;
