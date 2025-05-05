import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-wrap justify-center gap-10 px-10">
        <ProjectCard
          src="/postGenerator.jpg"
          title="AI Post Generator for Twitter"
          description="Built an AI-powered application that generates engaging Twitter posts. Leverages machine learning algorithms to create content based on user preferences and trending topics."
        />
        <ProjectCard
          src="/shoemap.png"
          title="Real-time Messenger Clone"
          description="Developed a full-stack messaging platform with real-time communication features. Includes user authentication, message encryption, and responsive design for all devices."
        />
        <ProjectCard
          src="/chatBot.jpg"
          title="OpenAI Chatbot Integration"
          description="Created an intelligent chatbot using OpenAI's API. Features include natural language understanding, context retention, and customizable responses for various use cases."
        />
        <ProjectCard
          src="/YoutubeClone.jpg"
          title="Full-Stack YouTube Clone"
          description="Built a comprehensive YouTube clone with video uploading, streaming, commenting, and user subscription features. Implemented using modern web technologies."
        />
        <ProjectCard
          src="/codeEditor.jpg"
          title="Real-time Collaborative Code Editor"
          description="Developed an interactive code editor that allows multiple users to collaborate in real-time. Supports syntax highlighting for multiple languages and instant code execution."
        />
      </div>
    </div>
  );
};

export default Projects;