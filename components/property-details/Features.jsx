const featureGroups = [
  [
    "Power Backup",
    "24x7 Security",
    "Balcony",
    "Pre-School",
    "View of Landmark",
    "Security Staff"
  ],
  [
    "Hangers",
    "Bed linens",
    "Extra pillows & blankets",
    "Iron",
    "TV with standard cable",
  ],
  ["Refrigerator", "Microwave", "Dishwasher", "Coffee maker"],
];

export default function Features() {
  return (
    <>
      <h5 className="title fw-6">Amenities and features</h5>
      <div className="wrap-feature">
        {featureGroups.map((features, index) => (
          <div className="box-feature" key={index}>
            <ul>
              {features.map((feature, idx) => (
                <li className="feature-item" key={idx}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
