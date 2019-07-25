import React from 'react';

class ProfileForm extends React.Component {
    state = {
            firstName : ""
    }
    handleChange = e =>{
        console.log ({
            name: e.target.name,
            value: e.target.value

        });

        this.setState(
            {
                firstName: e.target.value
            }
        )
    }

   
    handleSubmit = e =>{
            e.preventDefault();
        console.log("Formulario hizo submit");
    }


    render() { 
        return (  
            <div className = "container">
                <h1>Nuevo asistente</h1>
           
                <form onSubmit = {this.handleSubmit}>
                    <div className = "form-group">
                        <label>Nombre</label>
                        <input 
                            onChange = {this.handleChange}
                            className = "form-control"
                            type="text"
                            name = "firstName"
                            value = {this.state.firstName}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Apellidos</label>
                        <input 
                            onChange = {this.handleChange}
                            className = "form-control"
                            type="text"
                            name = "LastName"
                        />
                    </div>
                    <div className = "form-group">
                        <label>Email</label>
                        <input 
                            onChange = {this.handleChange}
                            className = "form-control"
                            type="email"
                            name = "email"
                        />
                    </div>
                    <div className = "form-group">
                        <label>¿En que trabajas?</label>
                        <input 
                            onChange = {this.handleChange}
                            className = "form-control"
                            type="text"
                            name = "jobTitle"
                        />
                    </div>
                    <div className = "form-group">
                        <label>Twitter</label>
                        <input 
                            onChange = {this.handleChange} 
                            className = "form-control"
                            type="text"
                            name = "twitter"
                        />
                    </div>
                    <button 
                        
                        className = "btn btn-primary">
                        Guardar
                    </button>
                </form> 
            </div>
        );
    }
}
 
export default ProfileForm;