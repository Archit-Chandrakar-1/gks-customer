const items = [
  { label: "ID:",                   content: "#1234" },
  { label: "Listing Type:",         content: "Sell"},
  { label: "Property Type:",        content: "Apartment"},
  { label: "Furnishing Type:",      content: "Fully Furnished"},
  { label: "Locality:",             content: "civil lines"},
  { label: "Land Area[sqft]:",      content:"3000sqft"},
  { label: "Built-up Area[sqft]:",  content:"2000sqft"},
  { label: "Carpet Area[sqft]:",    content:"1500sqft"},
  { label: "BHK:",                  content: "3" },
  { label: "Rooms:",                content: "9" },
  { label: "Bathrooms:",            content: "5" },
  { label: "Additional Rooms:",     content: "Pooja Room"},
  { label: "Total Floor Count:",    content: "2"},
  { label: "Balony",                content: "Indivisual"},
  { label: "Facing:",               content: "west" },
  { label: "Year built",            content: "2024" },
  { label: "Size",                  content: "150 sqft" },
  { label: "Tower/Block:",          content: "A Block" },
  { label: "Unit:",                 content: "101" },
  
  
];

export default function Details() {
  return (
    <>
      {" "}
      <h5 className="title fw-5">Property Details</h5>
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="inner-box">
              <span className="label text-black-3">{item.label}</span>
              <div className="content text-black-3">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

