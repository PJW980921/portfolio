import EmotionalCore from '../../../public/images/project-emotional-core.png';
import PortFolio from '../../../public/images/project-portfolio.png';
import Taskify from '../../../public/images/project-taskify.png';
import HtmlIcon from '../../../public/images/svgs/HTML.svg';
import CSSIcon from '../../../public/images/svgs/CSS.svg';
import JavaScriptIcon from '../../../public/images/svgs/JavaScript.svg';
import TypeScriptIcon from '../../../public/images/svgs/TypeScript.svg';
import ReactIcon from '../../../public/images/svgs/React.svg';
import NextJsIcon from '../../../public/images/svgs/Nextjs.svg';
import ThreeJsIcon from '../../../public/images/svgs/Threejs.svg';
import ReactQueryIcon from '../../../public/images/svgs/React-Query.svg';
import ReactHookFormIcon from '../../../public/images/svgs/React-Hook-Form.svg';
import AxiosIcon from '../../../public/images/svgs/Axios.svg';
import GitIcon from '../../../public/images/svgs/Git.svg';
import GitHubIcon from '../../../public/images/svgs/GitHub.svg';
import VercelIcon from '../../../public/images/svgs/Vercel.svg';
import VscodeIcon from '../../../public/images/svgs/Vscode.svg';

export const navigationList = [
  { label: 'Home', link: '/', icon: 'home', newTab: false },
  { label: 'About', link: '/about', icon: 'about', newTab: false },
  { label: 'Projects', link: '/projects', icon: 'projects', newTab: false },
  {
    label: 'Information',
    link: '/information',
    icon: 'information',
    newTab: false,
  },
  {
    label: 'Github',
    link: 'https://www.github.com/PJW980921',
    icon: 'github',
    newTab: true,
  },
  { label: 'Resume', link: '/resume.pdf', icon: 'resume', newTab: true },
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/pjw980921/',
    icon: 'linkedin',
    newTab: true,
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/pjw98__/',
    icon: 'instagram',
    newTab: true,
  },
];

export const projectList = [
  {
    src: EmotionalCore,
    alt: 'JiWonPark Project Web PortFolio Image',
    skills: [
      { icon: TypeScriptIcon, alt: 'TypeScript Icon' },
      { icon: ReactIcon, alt: 'React Icon' },
      { icon: NextJsIcon, alt: 'Next.js Icon' },
      { icon: ReactQueryIcon, alt: 'React Query Icon' },
      { icon: AxiosIcon, alt: 'Axios Icon' },
      { icon: VercelIcon, alt: 'Vercel Icon' },
    ],
  },
  {
    src: PortFolio,
    alt: 'JiWonPark Project EmotionalCore PlatForm Image',
    skills: [
      { icon: TypeScriptIcon, alt: 'TypeScript Icon' },
      { icon: ReactIcon, alt: 'React Icon' },
      { icon: NextJsIcon, alt: 'Next.js Icon' },
      { icon: ThreeJsIcon, alt: 'Three.js Icon' },
      { icon: VercelIcon, alt: 'Vercel Icon' },
    ],
  },
  {
    src: Taskify,
    alt: 'JiWonPark Project Taskify PlatForm Image',
    skills: [
      { icon: TypeScriptIcon, alt: 'TypeScript Icon' },
      { icon: ReactIcon, alt: 'React Icon' },
      { icon: NextJsIcon, alt: 'Next.js Icon' },
      { icon: ReactHookFormIcon, alt: 'React Hook Form Icon' },
      { icon: AxiosIcon, alt: 'Axios Icon' },
      { icon: VercelIcon, alt: 'Vercel Icon' },
    ],
  },
];
