import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { bookContext } from '../App';
import '../Styles/HomePage.css'

const BookList = () => {
  const { loading, setError } = useContext(bookContext);
  const [bookList, setBookList] = useState([]);
  const [listLoading, setListLoading] = useState(false);
  
//fetch book list when component loads
useEffect(()=>{
  const fetchBooks = async () => {
    setListLoading(true);
    setError("");
    try {
        const response = await fetch("https://openlibrary.org/subjects/fiction.json?limit=30");
        const data = await response.json();
        setBookList(data.works || []); 
      } catch (err) {
        setError("Failed to load books");
      } finally {
        setListLoading(false);
      }
    };
    fetchBooks();
  },[setError]);

  return (
    <Container className='mx-auto'>
      {(loading || listLoading) && (
        <div className="text-center my-5">
          <Spinner animation="border" variant="dark" />
          <p className="mt-2 text-muted">Loading books...</p>
        </div>
      )}
      {/* Book Results */}
      {!loading && bookList.length > 0 && (
        <Row className="g-4 mt-4">
          {bookList.map((book, index) => {
            const coverId = book.cover_id;
            const imageUrl = coverId
              ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
              : 'https://via.placeholder.com/200x300?text=No+Cover';
            const title = book.title || 'Unknown Title';
            const author = book.author_name?.[0] || 'Unknown Author';
            const year = book.first_publish_year || 'N/A';
            const randomPrice = (Math.random() * 500 + 200).toFixed(0); // ₹200–₹700
            const randomRating = (Math.random() * 2 + 3).toFixed(1); // 3.0–5.0

            return (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <Card className="h-100 shadow-sm border-0 text-center book-card">
                  <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: '250px' }}>
                    <Card.Img
                      variant="top"
                      src={imageUrl}
                      alt={title}
                      style={{ height: '100%', width: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-semibold fs-6 card-title">{title}</Card.Title>
                    <Card.Text className="text-muted mb-1">{author}</Card.Text>
                    <div className='d-flex justify-content-center'>
                      <Card.Text className="small text-secondary mx-2">📅 {year}</Card.Text>
                      <Card.Text className="fw-bold text-success mx-4">₹{randomPrice}</Card.Text>
                      <Card.Text className="small mx-2">⭐ {randomRating} / 5</Card.Text>
                    </div>
                    <Button variant="outline-dark" size="sm" className="rounded-0 w-100 bg-light text-dark py-3 detail-btn">
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};

export default BookList
