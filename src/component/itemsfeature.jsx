function itemsfeature(props) {
    return(
        <section className="itemsfeature">
            <i className={props.data.icon}></i>
            <p className="name">{props.data.name}</p>
            <p className="detail">{props.data.detail}</p>
        </section>
    );
}

export default itemsfeature;