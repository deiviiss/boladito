import { Link, Route, Routes } from 'react-router-dom'
import ProfileDatos from './Profile/ProfileDatos'
import ProfileSeguridad from './Profile/ProfileSeguridad'

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <ul className='flex justify-center items-center'>
          <li>
            <Link to="/profile/datos" >Datos</Link>
          </li>
          <li>
            <Link to="/profile/seguridad">Seguridad</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ProfileDatos />} />
        <Route element={<ProfileDatos />} path="/datos" />
        <Route element={<ProfileSeguridad />} path="/seguridad" />
      </Routes>

    </div>
  )
}

export default ProfilePage
