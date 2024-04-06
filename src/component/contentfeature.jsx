import Itemsfeature from "./itemsfeature.jsx";

function contentfeature() {
    const data = [
        {icon:"fa-solid fa-feather",name:"Premium Webdesign",detail:"With pixel-perfect web design, our templates will help your website stand out from your competition."},
        {icon:"fa-solid fa-star",name:"Webflow Variables",detail:"Easily change colors and components in just a few clicks with Webflow Variables."},
        {icon:"fa-solid fa-desktop",name:"Webflow CMS",detail:"Easily edit and customize the content with the Webflow Content Management System."},
        {icon:"fa-solid fa-cart-shopping",name:"Webflow Ecommerce",detail:"Create your own ecommerce store with our Webflow Ecommerce ready templates."},
        {icon:"fa-solid fa-signal",name:"SEO Optimized",detail:"Images, Videos, Headings and the HTML Structure are optimized for the latest SEO features."},
        {icon:"fa-solid fa-pager",name:"Fast Page Loading Speed",detail:"Our Templates are optimized for fast page loading and are using latest optimization features like WebP."},
        {icon:"fa-solid fa-mobile-screen-button",name:"100% Responsive",detail:"Each template is optimized for big desktop screens, to tablets, smartphones and other mobile devices."},
        {icon:"fa-solid fa-star",name:"Advanced Animations",detail:"Modern and andvanced animations ensuring an impressive browsing experience."},
        {icon:"fa-solid fa-hammer",name:"UI Kit & Components",detail:"Each template comes with a full Styleguide and a UIkit with easy reusable Webflow components."},
        {icon:"fa-brands fa-css3",name:"Client First System",detail:"We are using the popular Client First System by Finsweet for easy and intuitive class naming."},
        {icon:"fa-brands fa-figma",name:"Figma File",detail:"Each template comes with a fully editable Figma File."},
        {icon:"fa-solid fa-envelope",name:"Premium Support",detail:"Need help with your Webflow template? Get premium support from Webflow experts."},
    ]

    return(
        <section className="contentfeature">
            <h2>Webflow Templates <br/> full of powerful features</h2>
            <div className="boxitems">
            {data.map((item,key) => (
                <Itemsfeature data={item} key={key}/>
            ))}
            </div>
        </section>
    );
}

export default contentfeature;