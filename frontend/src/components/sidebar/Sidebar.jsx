import styleSidebar from './Sidebar.module.css';
import capa from '../../assets/capa.jpeg';
export function Sidebar(){
 return(
    <anside className={styleSidebar.sidebar}>
      <img src={capa} alt={'foto de capa'} />

      <div className={styleSidebar.profile}>
        <strong>Douglas oliveira</strong>
        <span>Full Stack Developer</span>
      </div>
      <footer>
        <a href='#'>
            Editar seu perfil
        </a>
      </footer>
    </anside>
 )   
}