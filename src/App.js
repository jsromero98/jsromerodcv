import { TabMenu } from 'primereact/tabmenu';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import './App.css';

const App = () => {

  const items = [
    {label: 'Johan Romero'},
    {label: '         ', disabled: true},
    {label: 'Datos Básicos', icon: 'pi pi-fw pi-user'},
    {label: 'Educación', icon: 'pi pi-fw pi-book'},
    {label: 'Experiencia', icon: 'pi pi-fw pi-building'},
    {label: 'Habilidades de programación', icon: 'pi pi-fw pi-tags'},
    {label: 'Contacto', icon: 'pi pi-fw pi-inbox'}
  ];

  return (
    <div className="App">
      <TabMenu model={items} />
      <div itemID='foto'>
        <Image src='DSC_0235.jpg' alt='retrato'></Image>
      </div>
      <Card itemID='basics'>
        <h1>Johan Sebastian Romero Diaz</h1>
        <p>Estudiante de Ingeniería de Sistemas y Computación de la Universidad Nacional de Colombia</p>
        <h2>Idiomas</h2>
        <ul>
          <li>Español</li>
          <li>Inglés</li>
        </ul>
      </Card>
      <Card itemID='education'>
        <h2>Estudios universitarios</h2>
        <h2>Cursos</h2>
      </Card>
      <Card itemID='experience'>
        <h2>Trabajos</h2>
        <h2>Proyectos</h2>
      </Card>
      <Card itemID='contact'>
        <h2>Contacto</h2>
        
      </Card>
    </div>
  );
}

export default App;
