// src/data/projects.ts
export type Project = {
    title: string;
    description: string;
    image: string;
    href: string;
    document?: string;
    tags?: string[];
    buttonLabel?: string;
    featured: boolean;
    content: string[];
};


export const projects: Project[] = [
    {
        title: "A DataOps and MLOps Architecture for Real-World and Real-Time Assessment of Functional Knee Instability Using IMU Sensors",
        description:
            "This project proposes a DataOps and MLOps architecture that enables real-time collection, processing, governance, and visualization of IMU sensor data to support objective assessment of functional knee instability in real-world clinical and rehabilitation settings.",
        content: [
            "Patients with anterior cruciate ligament injuries can experience functional knee instability during daily activities or sport-specific movements, but this instability is difficult to measure objectively in real-world settings. Current clinical assessments often rely on static tests, imaging, and clinician interpretation, which provide only intermittent insight into how the knee behaves under dynamic load. At the same time, wearable inertial measurement units can capture movement data continuously, but these sensor-based approaches often remain limited to research settings, offline processing, or isolated technical prototypes.",

            "This project addresses that challenge by designing a DataOps and MLOps architecture for the real-world and real-time assessment of functional knee instability using IMU sensors. Instead of focusing only on sensor collection or model prediction, the architecture provides an end-to-end platform for streaming, validating, processing, storing, versioning, analyzing, and visualizing IMU data. It combines a Kubernetes-based microservice environment, Apache Kafka as an event backbone, Dagster for orchestration, time-series and analytical storage, MLflow and DVC for machine learning lifecycle management, KServe for inference, and Grafana-based dashboards for clinical visualization and monitoring.",

            "The architecture was developed through a multi-method design approach, combining literature review, analysis of existing project documentation, stakeholder meetings, architectural principle formulation, and technical proof-of-concept development. The resulting design principles were organized around four domains: data management, the machine learning lifecycle, infrastructure, and quality attributes. These principles guided the selection of technologies and ensured that the architecture supports scalability, flexibility, resilience, traceability, reproducibility, monitoring, and clinician-in-the-loop interpretation.",

            "The goal of this project is not to provide an autonomous diagnostic system. Instead, it proposes a production-oriented foundation that can support clinicians and researchers with objective, interpretable, and traceable measures of knee-related function. By enabling real-time data ingestion, feature extraction, model deployment, monitoring, and visualization, the architecture helps move IMU-based knee instability assessment beyond isolated experiments toward a governed, extensible, and clinically meaningful platform for future validation and real-world use.",

        ],
        image: "/images/projects/clinical-rag-framework.png",
        href: "/projects/knimu",
        document: "/files/projects/knimu.pdf",
        tags: ["DataOps", "MLOps", "Healthcare", "IMU", "Knee Instability"],
        buttonLabel: "Read more",
        featured: true,
    },
    {
        title: "Enhancing Clinician Trust through a Trust-Enabling Framework for Clinical RAG-Based LLM Assistants interfacing with Internal Healthcare Protocols",
        description:
            "A trust-enabling framework around a clinical RAG-based LLM assistant, focused on transparency, traceability, monitoring, human oversight, and safer use in healthcare contexts.",
        content: [
            "Healthcare professionals need fast, reliable access to internal clinical protocols, but finding the right information across large documentation systems can be time-consuming. At the same time, hospitals are increasingly exploring Retrieval-Augmented Generation (RAG) and Large Language Model (LLM) assistants to make protocol knowledge easier to access through natural language questions. However, in a clinical context, a generated answer is not enough. Clinicians must be able to understand where an answer came from, whether the retrieved protocol is appropriate, how reliable the response is, and when the system should be questioned or ignored.",

            "This project addresses that challenge by designing and implementing the Clinician Trust Framework: a trust-enabling layer around a clinical RAG-based LLM assistant for hospital protocols. Instead of focusing only on answer generation, the framework makes AI interactions more transparent, inspectable, traceable, and open to review. It combines source visibility, provenance information, evaluation scores, warning signals, behavioural safeguards, trace logging, monitoring dashboards, and user feedback mechanisms. These elements help clinicians assess whether an answer is grounded, complete, safe, clinically suitable, and reviewable.",

            "The framework was developed through a Design Science Research approach, combining literature review, expert consultation, ethical evaluation, requirements engineering, architecture design, prototyping, and formative validation. A proof-of-concept implementation demonstrates how trust-supporting mechanisms can be operationalized around a working RAG assistant. Validation with a Head Research Nurse and nurses from geriatrics and neurology showed that source visibility, reliability information, explanations, and feedback were recognized as valuable mechanisms, while also revealing the need for clearer source presentation, improved terminology, better interface integration, and stronger answer quality.",

            "The goal of this project is not to make clinicians trust AI unconditionally. Instead, it supports calibrated trust: helping clinicians rely on AI-generated protocol answers when they are well supported, and question, verify, or reject them when evidence is weak, uncertain, or unsafe.",
        ],
        image: "/images/projects/clinical-rag-framework.png",
        href: "/projects/clinical-rag-framework",
        document: "/files/projects/clinician-trust-framework.pdf",
        tags: ["AI", "RAG", "Healthcare", "Trust"],
        buttonLabel: "Read more",
        featured: true,
    },
];
