import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { bookContext } from '../App'
import { FaCartPlus } from 'react-icons/fa'
import '../Styles/HomePage.css'
import BookList from './BookList'
import headerbook from '../Images/HeaderBook.mp4'


const HomePage = () => {
  const { query, setQuery, searchBooks, books, loading, error } = useContext(bookContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchBooks(query)
  };


  return (
    <>
      <Container fluid className='video-container p-0'>
        <div className='hero-video-container'>
            <video className='hero-video' autoPlay muted loop playsInline >
              <source src={headerbook} type='video/mp4' />
            </video>
            </div>
            <div className="hero-overlay d-flex justify-content-center align-items-center">
              <h1 className="hero-title text-light">📚 Explore Your Favorite Books</h1>
              <p className="hero-subtitle text-light">Discover, learn, and grow with every page.</p>
            </div>
      </Container>
      <Container className='mt-4 mx-auto'>
        <Row >
          <Col md={10}  >
            <Form onSubmit={handleSubmit} className='d-flex'>
              <Form.Control type='text' placeholder='Enter the book title here...' className='w-100 py-3 rounded-0 fst-italic fw-semibold' value={query} onChange={(e) => setQuery(e.target.value)} />
              <Button type='submit' variant="dark" className="w-25 ms-2 rounded-0 py-3" >
                Search
              </Button>
            </Form>
          </Col>
          <Col md={2} className='d-flex justify-content-end align-items-center'>
            <FaCartPlus size={30} />
          </Col>
        </Row>
        {/* Loading Spinner */}
        {loading && (
          <div className='text-center my-5'>
            <Spinner animation='border' variant='dark' />
            <p className='mt-2 text-muted'>Loading books...</p>
          </div>
        )}

        {/* Error Message */}
        {error && !loading && (
          <p className='text-center fs-5 mt-4 text-danger'>{error}</p>
        )}

        {/* Book Results */}
        {!loading && books.length > 0 && (
          <Row className="g-4 mt-4">
            {books.map((book, index) => {
              const coverId = book.cover_i;
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
                  <Card className="h-100 shadow-sm border-0 text-center">
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
        <BookList />

      </Container>
    </>
  );
};

export default HomePage
