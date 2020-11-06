import React, { useState } from "react"
import { postProduct } from "../actions/action"
import { Link } from "react-router-dom";
import Navbar from "../partial/navbar"


export default function Form(props) {

    const [title, setTitle] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("")
    const [size, setSize] = useState([])
    const [description, setDescription] = useState("")
    const [sizeInput, setSizeInput] = useState("")
    const [image, setImage] = useState("")
    const [stock, setStock] = useState("")
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const onChangeBrand = (e) => {
        setBrand(e.target.value)
    }
    const onChangePrice = (e) => {
        setPrice(e.target.value)
    }
    const onChangeSizeInput = (e) => {
        console.log(e.target.value,"size")
        setSizeInput(e.target.value)
    }
    const onchangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const onchangeStock = (e) => {
        setStock(e.target.value)
    }
    const onChangeImage = (e) => {
        setImage(e.target.files[0].name)
    }
    // const onChangeFile = (e) => {
    //     setFile(e.target.files[0])
    //     setFileName(e.target.name)
    // }

    const addSize = () => {
        // setSizeInput()
        setSize([...size, sizeInput])
        setSizeInput("")
    };

    const deleteSize = (e, id) => {
        e.preventDefault();
        console.log(size, "ini size");
        setSize(() => ({
            size: size.filter((item) => item.id !== id),
        }));
    };

    const handleSubmit = () => {
        postProduct(title, brand, price, size, description, image, stock)
    }

    return (
        <div className="card" style={{ backgroundColor: 'blue' }}>
            <Navbar />
            <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <h1 className="display-4 text-center" style={{ color: 'black' }}>"NAWISAN,</h1>
                    <p className="lead text-center">sok gera daragang omat kudu aya batian montong no profit</p>
                </div>
            </div>
            <section className="" method="post" style={{color:'black'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 login-sec">
                            <h2 className="text-center">+Add Product</h2>
                            <form className="mt-2" >
                                {/* onSubmit={this.handleSubmit} */}
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={title}
                                        onChange={onChangeTitle}
                                        className="form-control"
                                        id="title"
                                        placeholder="input title"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="brand">Brand/Merk</label>
                                    <input type="text" name="brand"
                                        value={brand}
                                        onChange={onChangeBrand}
                                        className="form-control"
                                        id="brand"
                                        placeholder="input brand/merk"
                                        required
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="price">Price</label>
                                        <input type="text" name="price"
                                            value={price}
                                            onChange={onChangePrice}
                                            className="form-control"
                                            id="price"
                                            placeholder="Rp."
                                            required
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="stock">Stock</label>
                                        <input type="text" name="stock"
                                            value={stock}
                                            onChange={onchangeStock}
                                            className="form-control"
                                            id="stock"
                                            placeholder="input stock"
                                            required
                                        />
                                    </div>
                                </div>
                               
                                <div className="form-group">
                                    <label htmlFor="size">Size</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            name="size"
                                            value={sizeInput}
                                            onChange={onChangeSizeInput}
                                            className="form-control"
                                            id="size"
                                            placeholder="input size"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                type="button"
                                                className="btn btn-success"
                                                onClick={addSize}
                                            >
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {size.map((item, index) => (
                                            <div key={index} className="col-md-auto">
                                                <div className="card mt-2">
                                                    <div className="card-body py-1 px-2">
                                                        {console.log(item, "ini item")}
                                                        {item}
                                                        <a
                                                            href="/Register"
                                                            onClick= {deleteSize}
                                                            className="ml-2"
                                                        >
                                                            <i className="fa fa-times-circle text-dark"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="note">Description</label>
                                    <textarea
                                        className="form-control"
                                        name="note"
                                        value={description}
                                        onChange={onchangeDescription}
                                        id="note"
                                        rows="3"
                                        placeholder="input product description"
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image">Upload Image</label>
                                    <input 
                                    type="file" 
                                    name="image"
                                    className="form-control-file" 
                                    id="exampleFormControlFile1" 
                                    onChange={onChangeImage}/>
                                </div>
                                <br></br>
                                <button type="button" className="btn btn-success" onClick={() => { handleSubmit() }}>
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="col-md-8 banner-sec">
                            {/* <div className="carousel-inner" role="listbox"> */}
                            <div className="carousel-item active">
                                <img className="d-block img-fluid" src="https://www.pngkit.com/png/detail/257-2579098_ecommerce-website-website-e-commerce-site.png" style={{ height: '500px' }} alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
