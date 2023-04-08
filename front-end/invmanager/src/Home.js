import { useContext, useCallback, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InvGlobal } from './App';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    const [ itemList, setItemList ] = useContext(InvGlobal);
    const [ userList, setUserList ] = useContext(InvGlobal);
    const [ currentUser, setUserInfo ] = useContext(InvGlobal);
    // const [ error, setError ] = useContext(InvGlobal);
    // const [ isSubmitted, setIsSubmitted ] = useContext(InvGlobal);

    const fetchData = useCallback(async () => {
        const data = await fetch('http://localhost:8080/invitem');
        const json = await data.json();

        const newList = [...json];
        setItemList(newList);  

    }, [itemList])

    const fetchUsers = useCallback(async () => {
    const data = await fetch('http://localhost:8080/user');
    const json = await data.json();

        const userList = [...json];
        setUserList(userList);

    
    }, [userList])

    useEffect(() => {
    
        fetchData()
        fetchUsers()
        .catch(console.error);;

    }, []);

console.log(itemList);
console.log(userList);

    return (
    <div className="App"> Inventory Manager
        <header className="App-header"> Item List
        <Row>
            <button variant='contained' onClick={() => { navigate("/Login") }} className='NavItem'>Login</button>
        </Row>
        <Container>
            {/* <Col>
            {itemList.map(itemList => (
                <>
                <div key={itemList.Id}> ID: {itemList.Id}</div>
                <div key={itemList.ItemName}>ItemName: {itemList.ItemName}</div>
                <div className='Description' key={itemList.ItemName}>Description: {itemList.Description}</div>
                <div key={itemList.ItemName}>Quantity: {itemList.Quantity}</div>
                </>
            ))}
            </Col>    */}
        </Container> 
            <Row>
            <button type='button' class="btn btn-primary"
                onClick={() => { navigate("/Register") }}>
                Register
            </button>

            
            </Row>
        </header>
    </div>
    );
}


export default Home;