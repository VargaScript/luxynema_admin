import axios from 'axios';

const handleRegister = async (e) => {
  e.preventDefault();

  try {
    // Enviar datos al backend
    const response = await axios.post('http://127.0.0.1:8000/register/', {
      email: email,
      password: password
    });

    // Manejar la respuesta del backend según corresponda
    console.log('Usuario registrado:', response.data);

    // Redirigir al usuario a la página de inicio o a donde sea necesario
    navigate("/add");
  } catch (error) {
    // Manejar errores de la solicitud al backend
    console.error('Error al registrar usuario:', error);
  }
};


const handleLogin = async () => {
    try {
      // Enviar datos de inicio de sesión al backend
      const response = await axios.post('http://127.0.0.1:8000/login_admin/', {
        email: email,
        password: password
      });
  
      // Manejar la respuesta del backend según corresponda
      console.log('Inicio de sesión exitoso:', response.data);
  
      // Redirigir al usuario a la página de inicio o a donde sea necesario
      navigate("/home");
    } catch (error) {
      // Manejar errores de la solicitud al backend
      console.error('Error al iniciar sesión:', error);
    }
  };