// src/data/projects.ts
export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  tags?: string[];
  buttonLabel?: string;
  featured?: boolean;
  content?: string[];
};


export const projects: Project[] = [
  {
    title: "Clinician Trust Framework for RAG Assistants",
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
    tags: ["AI", "RAG", "Healthcare", "Trust"],
    buttonLabel: "View project",
    featured: true,
  },
//   {
//     title: "AI-Based Fall Detection from Nurse Notes",
//     description:
//       "Graduation project involving an AI-based fall detection model using nurse notes, with a focus on data processing automation, result storage, and hospital integration.",
//     content: [""],
//     image: "/images/projects/fall-detection.png",
//     href: "/projects/fall-detection",
//     tags: ["AI", "Healthcare", "Python", "Data pipelines"],
//     buttonLabel: "View project",
//     featured: false,
//   },
//   {
//     title: "Personal Portfolio Website",
//     description:
//       "A light-first personal portfolio built with Vite, React, TypeScript, Tailwind CSS, and GitHub Pages, designed around calm technical minimalism.",
//     content: [""],
//     image: "/images/projects/portfolio-website.png",
//     href: "/projects/portfolio-website",
//     tags: ["React", "TypeScript", "Tailwind", "GitHub Pages"],
//     buttonLabel: "View project",
//     featured: false,
//   },
//   {
//     title: "CMS Backend and Database Migration",
//     description:
//       "Backend development and database migration work for a CMS platform, including API maintenance, payment flow improvements, and migration to PostgreSQL.",
//     content: [""],
//     image: "/images/projects/cms-database-migration.png",
//     href: "/projects/cms-database-migration",
//     tags: ["Backend", "PostgreSQL", "APIs", "CMS"],
//     buttonLabel: "View project",
//     featured: false,
//   },
];
