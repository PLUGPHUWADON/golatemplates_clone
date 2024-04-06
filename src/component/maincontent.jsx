import Itemstemplate from './itemstemplate.jsx';

function maincontent() {
    const data = [
        {name:"Bjelle",price:79,detail:"Photography Webflow Template",img:"https://assets-global.website-files.com/639e3a353adcb618f4be6835/65fea39898ab5f81e1274996_bjelle-photography-webflow-template-preview-p-800.webp"},
        {name:"Enshi",price:79,detail:"Agency Webflow Template",img:"https://assets-global.website-files.com/639e3a353adcb618f4be6835/65f2a58d5702c87d493a4837_enshi-agency-portfolio-webflow-template-preview.webp"},
        {name:"Akito",price:79,detail:"Portfolio Webflow Template",img:"https://assets-global.website-files.com/639e3a353adcb618f4be6835/65f0bd81bce07935ce64c4b9_akito-agency-webflow-template-preview.webp"},
        {name:"Halsa",price:79,detail:"SaaS & Startup Webflow Template",img:"https://assets-global.website-files.com/639e3a353adcb618f4be6835/65e30a312322be12b7d5bde0_halsa-saas-startup-webflow-template-preview-p-500.webp"}
    ];

    return(
        <section className="maincontent">
            <h2>Lattest Templates</h2>
            <div className="boxitems">
                {data.map((item,key) => (
                    <Itemstemplate key={key} data={item}/>
                ))}
            </div>
        </section>
    );
}

export default maincontent;