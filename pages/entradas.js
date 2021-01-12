import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/style.css';
import Menu from '../components/Menu';
import { Component } from 'react';
import { Container, Form, FormGroup, Button, Jumbotron, FormControl} from 'reactstrap';

class Entradas extends Component {
    render() {
        return (
            <>
                <Menu />
                <Jumbotron fluid className='bg-blue-700 p-12 mb-0'>
                    <Container>
                        <h1 className='text-white text-center text-3xl'>Entradas</h1>
                    </Container>
                </Jumbotron>

                <Jumbotron fluid>
                    <Container>
                        <Form>
                            <FormGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>$</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Append>
                                        <InputGroup.Text>.00</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                <Button></Button>
                            </FormGroup>
                        </Form>
                    </Container>
                </Jumbotron>
            </>
        )
    }
}

export default Entradas