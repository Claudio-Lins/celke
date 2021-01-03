
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import Heade from '../components/Heade'
import { Jumbotron, Container } from 'reactstrap';

const HomePage = () => (
    <div>
        <Heade />
        <Menu />
        <Jumbotron fluid className="bg-primary py-5">
            <Container className="text-center">
                <h1 className="display-4">TVDE</h1>
                <p className="lead">Controle de corridas TVDE e Tranfers</p>
            </Container>
        </Jumbotron>
    </div>
)

export default HomePage