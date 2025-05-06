"use client";

import { useRouter } from 'next/navigation';
import './projectManagement.css';

const ProjectManagement = () => {
  const router = useRouter();

  const services = [
    {
      title: "End-to-End Property Management",
      description: "We provide end to end property management services in Raipur for Non-Residents. From tenant search, monthly rent collection to repairs and periodic inspections, Gharkasathi manages it all.",
      icon: "/icons/end-to-end.svg",
      path: "/end-to-end"
    },
    {
      title: "Rental Management",
      description: "Our rental property management services in Raipur for Non-Residents take care of everything from advertising your property, finding the right tenant, and support till tenant move-in.",
      icon: "/icons/rental.svg",
      path: "/rental"
    },
    {
      title: "Custom Property Management",
      description: "We provide customized property management services in Raipur for Non-resident Raipurns.",
      icon: "/icons/custom.svg",
      path: "/custom"
    }
  ];

  const steps = [
    {
      step: "STEP 01",
      title: "Initial Contact",
      description: "The House owner contacts Gharkasathi and enters into an agreement with Gharkasathi to manage/rent-out the property.",
      icon: "/icons/contact.svg"
    },
    {
      step: "STEP 02",
      title: "Property Handover",
      description: "House owner hands over keys and relevant property documents to the Gharkasathi operations team assigned to the property.",
      icon: "/icons/key.svg"
    },
    {
      step: "STEP 03",
      title: "Tenant Search",
      description: "The Gharkasathi operations team searches for tenants with a good background.",
      icon: "/icons/search.svg"
    },
    {
      step: "STEP 04",
      title: "Verification",
      description: "On finalizing the prospective tenant, Gharkasathi conducts background checks and obtains owner's approval.",
      icon: "/icons/verify.svg"
    },
    {
      step: "STEP 05",
      title: "Agreement",
      description: "After successful verification, Gharkasathi prepares the rental agreement to be signed by both parties.",
      icon: "/icons/agreement.svg"
    },
    {
      step: "STEP 06",
      title: "Completion",
      description: "The tenant transfers the deposit and monthly rent. Gharkasathi maintains the property throughout the agreement.",
      icon: "/icons/complete.svg"
    }
  ];

  return (
    <div className="project-management">
      {/* Services Section */}
      <div className="services-container">
        <h2 className="section-title">Our services include:</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              onClick={() => router.push(service.path)}
            >
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Steps Section */}
        <div className="steps-section">
          <h2 className="section-title">Our Process</h2>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-card"
              >
                <div className="step-number">{step.step}</div>
                <img src={step.icon} alt={step.title} className="step-icon" />
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
