import "./featured_products.css";
import FpCard from "./fp_card.js";

const FeaturedProducts = () => {
  let featured_products_data = [
    {
      category: "Black & Machined with Dark Tint",
      name: "Niche TARGA M130",
      sale: "yes",
      price: "27,000",
      discount: "30,000",
    },
    {
      category: "SATIN BLACK",
      name: "Niche Vosso M203",
      sale: "yes",
      price: "15,000",
      discount: "20,000",
    },
    {
      category: "ANTHRACITE",
      name: "Niche VOSSO M204",
      price: "18,000",
      discount: "20,000",
    },
  ];
  let on_sale_data = [
    {
      category: "Black & Machined with Dark Tint",
      name: "Niche TARGA M130",
      sale: "yes",
    },
    {
      category: "SATIN BLACK",
      name: "Niche Vosso M203",
      sale: "yes",
    },
    {
      category: "ANTHRACITE",
      name: "Niche VOSSO M204",
    },
  ];
  let bodykits_data =[
    { category: "Bronze", name: "Niche VICE M227"},
    {
      category: "Race Series",
      name: "Borla XR1 2.50 40941 Core Oval Small Body",
    },
    {
      category: "ProXS Series(Non Polished Without Tip)",
      name: "Borla ProXS 2.50 40941 Core 40659",
    },
  ]
  const renderFeaturedProducts = (list) => {
    return list.map((elem) => <FpCard data={elem} />);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <span className="fpfont">
            <span className="fpbrdr">Featured</span> Products
          </span>
          <hr />
          {renderFeaturedProducts(featured_products_data)}
        </div>
        <div className="col-4 fp_hr">
          <span className="fpfont">
            <span className="fpbrdr">On-Sale</span> Products
          </span>
          <hr />
          {renderFeaturedProducts(on_sale_data)}
        </div>
        <div className="col-4 fp_hr">
        <span className="fpfont">
            <span className="fpbrdr">Bodykits</span>
          </span>
          <hr />
          {renderFeaturedProducts(bodykits_data)}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
