export default function Product(){
    let product = [
        {
            id: 789,
            name: "Laptop",
            price : "100k"
        },
        {
            id: 654,
            name: "Mobile Device",
            price : "30k"
        },
        {
            id: 321,
            name: "Tablet",
            price : "20k"
        },
        {
            id: 123,
            name: "Watch",
            price : "10k"
        },
        {
            id: 987,
            name: "TV",
            price : "5k"
        }
    ];
    return (
        <>
            {
                product.map(function (product) {
                    return (
                        <div key={product["id"].toString()} >
                            Name : {product["name"]} &nbsp;
                            and Price : {product["price"]}
                        </div>
                    );
                })
            }
        </>
    );
};