import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/style.css';
import Menu from '../components/Menu';
import React, { Component } from 'react';
import { Container, Jumbotron, Form, FormGroup, Input, Button } from 'reactstrap';


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
                            <FormGroup className='flex px-96 space-x-2'>
                                <Input className='p-4' type='number' name='uberEntrada' id='uberEntrada' placeholder='Uber'></Input>
                                <Button>Uber</Button>
                            </FormGroup>

                            <FormGroup className='flex px-96 space-x-2'>
                                <Input className='p-4' type='number' name='boltEntrada' id='boltEntrada' placeholder='Bolt'></Input>
                                <Button>Bolt</Button>
                            </FormGroup>

                            <FormGroup className='flex px-96 space-x-2'>
                                <Input className='p-4' type='number' name='freeNowEntrada' id='freeNowEntrada' placeholder='FreeNow'></Input>
                                <Button>FreeNow</Button>
                            </FormGroup>

                            <FormGroup className='flex px-96 space-x-2'>
                                <Input className='p-4' type='number' name='uberEatsEntrada' id='uberEatsEntrada' placeholder='UberEats'></Input>
                                <Button>UberEats</Button>
                            </FormGroup>
                        </Form>
                    </Container>
                </Jumbotron>
            </>
        )
    }
}

export default Entradas