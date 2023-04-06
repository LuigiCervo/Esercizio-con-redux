import { useSelector, useDispatch } from 'react-redux'
import { Col, Row, Button, Container } from 'react-bootstrap'



const FavouriteList = () => {
    const listContent = useSelector((state) => state.favourite.list)
    const dispatch = useDispatch()

    return(
        <Container>
    <Row className='d-flex flex-column'>
        <h1>YOUR LIST OF FAVOURITE COMPANIES</h1>
        <Col>
        <ul>
            {listContent.map((company, i) =>(
                <li className='mb-3' key={company}>
                    <Button
                    className='mr-3'
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_FAVOURITE',
                    payload: i,
                  })
                }}
              >Remove</Button>
                {company}</li>
            ))}
        </ul>
        </Col>
    </Row>
    </Container>
        )
}

export default FavouriteList 
