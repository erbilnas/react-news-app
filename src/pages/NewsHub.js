import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import services from '../redux/services'
import selectors from '../redux/selectors'

const NewsHub = ({ news, isLoading, isError, fetchNews }) => {
    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <>
            <div>
                {isError && <div className="errorText">SOMETHING WENT WRONG...</div>}
                {isLoading && <h2>LOADING...</h2>}
            </div>
            <div className="cards-container">
                {news !== undefined &&
                    news.map(({ title, urlToImage, author, content, url }) => {
                        return (
                            <Card border="dark" style={{ width: '18rem' }} key={title} className="card">
                                <Card.Img variant="top" src={urlToImage} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Subtitle>Author: {author}</Card.Subtitle>
                                    <Card.Text>{content}</Card.Text>
                                    <Button variant="info" href={url}>READ MORE</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    news: selectors.getNews(state),
    isLoading: selectors.getLoader(state),
    isError: selectors.getError(state)
});

const mapDispatchToProps = {
    fetchNews: services.fetchNews
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsHub)
