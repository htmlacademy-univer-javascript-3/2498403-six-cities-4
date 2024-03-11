import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div style={{paddingLeft: 20}}>
      <h1>404 Not Found</h1>
      <Link to='/'>Перейти на главную страницу</Link>
    </div>
  );
}

export default NotFound;
