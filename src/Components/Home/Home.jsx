import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext'


const Home = () => {
    const { user } = useContext(UserContext);

  return (
    <div>
        <h1>Bienvenido</h1>
        <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    
    <h2>Aquí van a ir los productos. Estamos trabajando en eso ;I</h2>

    </div>
  )
}

export default Home