import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div style={{ border: '4px solid green', padding: '20px' }}>
      <h1>Sou o Cabeçalho Fixo</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link> | <Link to='/info'> Info </Link>
      </nav>

      <hr />

      <div style={{ border: '2px dashed red', padding: '10px', margin: '10px 0' }}>
        <p style={{color: 'red'}}>O conteúdo variável aparece abaixo:</p>
        <Outlet />  
      </div>

      <hr />

      <footer>Sou o Rodapé Fixo</footer>
    </div>
  );
}

export default Layout;