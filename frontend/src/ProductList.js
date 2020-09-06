import React, {useState, useEffect} from "react";
import axios from 'axios';
// import data from './data.json'
import {ComplexGrid} from "./ProductLayout";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    buttonRoot: {
        padding: "auto",
        margin: "auto",
        maxWidth: 300,
        display: 'flex',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        }
    }

}));


const ProductList = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('http://localhost:5000/api/products', {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
        )
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            });
    }


useEffect(() => {

    getProducts()

}, []); // eslint-disable-line





    return (
        <div>
            <Typography className={classes.buttonRoot}>
                PRODUCTS
            </Typography>
            {
                products.map(product => (
                   <ComplexGrid key={product.id} product={product}/>
                    )


                )
            }
        </div>
    )
}
export default ProductList;
