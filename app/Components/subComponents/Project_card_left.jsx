import ProjectCard from './ProjectCard';

// Text on the left, visual on the right (desktop).
export default function Project_card_left(props) {
  return <ProjectCard {...props} imageSide="right" />;
}
