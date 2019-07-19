import React from 'react';
import confLogo from '../images/logo_academiageek.png';

//importar los css



class ProfileHeader extends React.Component{

    render(){
        return(
            <div className="Profile__header">
                <img className="Profile__logo"src={confLogo} alt="logo AcademiaGeek"></img>
            </div>
        );

        }
}


export default ProfileHeader;
