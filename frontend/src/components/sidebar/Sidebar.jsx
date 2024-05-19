import styleSidebar from './Sidebar.module.css';
import capa from '../../assets/capa.jpeg';
import imgProfile from '../../assets/profile.jpeg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../avatar/Avatar';

export function Sidebar() {
  return (
    <anside className={styleSidebar.sidebar}>
      <img src={capa} alt={'foto de capa'} className={styleSidebar.imgCapa} />
      <div className={styleSidebar.profile} >
        <Avatar hasBorder={false} src={imgProfile} />
      </div>
      <div className={styleSidebar.profile}>
        <strong>Douglas oliveira</strong>
        <span>Full Stack Developer</span>
      </div>
      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </anside>
  )
}