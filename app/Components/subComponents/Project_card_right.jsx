import ProjectCard from './ProjectCard';

// Visual on the left, text on the right (desktop).
export default function Project_card_right(props) {
  return <ProjectCard {...props} imageSide="left" />;
}
