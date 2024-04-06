function itemstemplate(props) {
    return(
        <section className="itemstemplate">
            <img src={props.data.img} alt="" />
            <div>
                <div>
                    <p className="name">{props.data.name}</p>
                    <p className="price">${props.data.price}</p>
                </div>
                <p className="detail">{props.data.detail}</p>
            </div>
        </section>
    );
}

export default itemstemplate;