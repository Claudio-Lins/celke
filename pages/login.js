
import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import Heade from '../components/Heade';
import "../styles/main.css";
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Login = () => (
    <div>
        <Heade />
        <Menu />
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-blue-600 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12 ">
                <div className="flex-grow">
                    <h1 className="text-white text-center text-5xl sm:text-5xl mb-2">
                        TVDE
                    </h1>
                    <p className="text-center text-blue-200 sm:text-lg">
                        Faça seu login
                    </p>
                </div>
            </div>

        </div>

        <div className="lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24">
            <div className="flex-grow bg-white shadow-xl rounded-md border border-gray-300 p-8">
                <div className="sm:flex sm:items-center">
                    <img className="sm:flex-shrink-0 mx-auto sm:mx-0 h-24 rounded-full mb-2
                    " src="/gravatar-600.png" />
                </div>
                <form>
                    <FormGroup>
                        <Input className="text-center" type="email" name="email" id="exampleEmail" placeholder="email" />
                    </FormGroup>

                    <FormGroup>
                        <Input className="text-center" type="password" name="password" id="examplePassword" placeholder="password" />
                    </FormGroup>

                    <FormGroup className="text-center items-center">
                        <button className="text-blue-600 hover:text-white hover:bg-blue-600  border border-blue-600 font-semibold rounded-md text-md px-4 py-1 focus-outline-none">
                            Enviar
                        </button>
                    </FormGroup>
                </form>
            </div>
        </div>

    </div>
)

export default Login