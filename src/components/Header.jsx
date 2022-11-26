import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <a className='navbar-brand' href='/reef-graph-ql-ui'>
          <div className='d-flex'>
            <img src={logo} alt='logo' className='mr-2' />
            <div>Reef GraphQL</div>
          </div>
        </a>
        <span class="navbar-text">
          <Link to='/reef-graph-ql-ui/ide' className='btn btn-primary'>
            IDE
          </Link>
        </span>
      </div>
    </nav>
  );
}