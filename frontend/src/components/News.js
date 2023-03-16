// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Loader from './Loader';
import NewsItems from './NewsItems';
import Navbar from './Navbar';
export default class News extends Component {
    static defaultProps = {
        pageSize: 9,
        country: 'in',
        category: 'science'
    }



    // constructor is method which get executed as soon as the object of the given class is created... 
    constructor() {
        console.log('constructor');
        super();
        // console.log('this is the constructor of news component')
        this.state = {
            articles: [],
            loader: true,
            page: 1
        }
    }
    // componentDidMount() basically document render hone ke baad run hota hai ,,, in our case ye render() ke baad run ho raha hai . agar humko kuch set karna hai DOM me javascript ke madad se to componentDidMount function me likh sakte hai 
    async componentDidMount() {
        // change the url with different parameters and endpoints to fetch different results 
        // let url = 'https://api.coindcx.com/exchange/ticker';
        // let url = 'https://public.coindcx.com/market_data/orderbook?pair=B-BTC_INR';
        this.setState({ loader: true })
        let url = `https://newsapi.org/v2/top-headlines?pageSize=${this.props.pageSize}&country=${this.props.country}&category=${this.props.category}&apiKey=29716edd0d2940909564f7aff863753d&page=1`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loader: false });

    }
    goToPreviousPage = async () => {
        this.setState({ loader: true })
        // console.log('hey you clicked on previous page button');
        let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=${this.props.pageSize}&country=${this.props.country}&category=${this.props.category}&apiKey=29716edd0d2940909564f7aff863753d&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loader: false
        });

    }
    goToNextPage = async () => {
        // console.log('hey you clicked on Next page button');
        this.setState({ loader: true })
        if (!((this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=${this.props.pageSize}&country=${this.props.country}&category=${this.props.category}&apiKey=29716edd0d2940909564f7aff863753d&page=${this.state.page + 1}`;


            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loader: false
            });
        }
    }

    render() {
        console.log('render');
        return (
            <>  
                {/* <Navbar /> */}
                <div className='container my-3'>
                    <h3 className='text-center'>News Junction - Crypto, Politics, Sports etc.</h3> <br />
                    {this.state.loader && <Loader />}
                    <div className="row">
                        {(!this.state.loader) && this.state.articles.map((article) => {
                            return <div className="col-md-4" key={article.url}>
                                <NewsItems title={article.title} description={article.description} url={article.url} imgUrl={article.urlToImage} author ={article.author} date = {article.publishedAt} source = {article.source.name} />
                            </div>
                        })}
                    </div>
                    <div className="container my-3 d-flex justify-content-around">
                        <button type="button" disabled={this.state.page <= 1} onClick={this.goToPreviousPage} className="btn btn-danger">&larr; Previous</button>
                        <button type="button" disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.goToNextPage} className="btn btn-danger">Next &rarr;</button>
                    </div>
                </div>
            </>
        );


    }
}
