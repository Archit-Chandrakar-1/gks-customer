const featureGroups = [
  [
    "Wardrobes", 
    "Modular Kitchen",
    "ACs",
    "Geysers",
  ],
  [
    "Parking",
    "Lift",
    "Water Supply",
    "Security",
    "Power Backup",
    
  ],
  ["Clubhouse",
    "Gym",
    "Park",
    "Swimming Pool",
    "CCTV",],
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
