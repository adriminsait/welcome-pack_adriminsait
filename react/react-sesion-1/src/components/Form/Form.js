import React from 'react';

import './Form.css';

class Form extends React.Component {

    state = {
        name: '',
        movie: '',
        description: '',
        imageUrl: '',
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmitForm(this.state);
        // Limpiamos los campos del formulario
        this.setState({
            name: '',
            movie: '',
            description: '',
            imageUrl: '',
        });
    };

    handleChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    <p>Nombre</p>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChangeInput} />
                </label>

                <label>
                    <p>Película o serie</p>
                    <input type="text" name="movie" value={this.state.movie} onChange={this.handleChangeInput} />
                </label>

                <label>
                    <p>Descripción</p>
                    <textarea name="description" value={this.state.description} onChange={this.handleChangeInput} />
                </label>

                <label>
                    <p>URL a imagen</p>
                    <input  type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChangeInput} />
                </label>

                {/* ¡Estamos utilizando CSS en JS! */}
                <div style={{ padding: '1rem' }}>
                    {this.state.imageUrl ? (
                    <img src={this.state.imageUrl} alt={this.state.name} width="100px" />
                    ) : null}
                </div>

                <button type="submit">Crear personaje</button>
            </form>
        );
    }
  }

  export default Form;