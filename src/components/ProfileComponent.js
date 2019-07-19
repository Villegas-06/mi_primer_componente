import React from 'react';
import confLogo from '../images/logo_academiageek.png';

//importar los css
import './styles/ProfileStyle.css'

//clases, empiezan letras en mayúscula (camelCase)
class Profile extends React.Component{

    render(){
        return(
            //Contenedor de mi card
            <div className="Profile">
                 {/*Encabezado de perfil*/}
                <div className="Profile__header">
                    <img className="Profile__logo"src={confLogo} alt="logo AcademiaGeek"></img>
                </div>
                {/*Nombre de Usuario y Avatar*/}
                <div className="Profile__section-name">
                    <img className="Profile__avatar" src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png" alt="avatar del usuario"></img>
                    <h1>Miguel Angel <br /> Montoya Villegas</h1>
                </div>
                {/*Información personal del Usuario*/}
                <div className="Profile__section-info">
                    <h2>FrontEnd Developer</h2>
                    <div>@Villegas4006</div>
                </div>
                <div className="Profile__footer">
                    #geekconf
                </div>
            </div>
        );
    }
}

//exportar el JS
export default Profile;