
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Login = () => {
    return (
        <>
            <main className="container">
                <div className="login">
                    <h1 className="iniciarS">Iniciar sesión</h1>

                    <form id="login-form">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input type="email" name="email" required className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="email" name="email" className="form-text">Nunca compartiremos tu información con nadie.</div>
                        </div>

                        <div className="mb-1">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" name="password" required className="form-control" id="password" />
                            <p id="validationErr"></p>
                        </div>
                        <div className="pb-3">
                            Olvidó su contraseña? Haga click <a href="restorePSW.html" className="aqui">aquí</a>
                        </div>
                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>

                        <div className="d-flex justify-content-center p-2 lineaSeparadora">
                            _________________________________________________________
                        </div>

                        <div className="d-flex justify-content-center">
                            <a href="/registrate" className="btn mt-3 btn-outline-success">Crear cuenta nueva</a>
                        </div>
                    </form>
                </div>
            </main>

        </>
    );
}
